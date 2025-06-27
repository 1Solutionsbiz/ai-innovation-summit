import React, { useState, useEffect } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";


const RECAPTCHA_SITE_KEY = "6LfhcysrAAAAAGAo4G_2kXen3oBn290aZNX7caV_";

interface FormDataType {
  name: string;
  designation: string;
 
  organization: string;
  industry: string;
  employeeSize: string;
  phoneNumber: string;
  officialEmail: string;
  personalEmail: string;
  city: string;
  pincode: string;
  termsAccepted: boolean;
  // detailsDisclosure: boolean;
  dataConsent: boolean; // New field
  marketingConsent: boolean; // New field
  sponsorSharingConsent: boolean; // New field
  utm_campaign_temp: string;
  utm_medium_temp: string;
  utm_source_temp: string;
  utm_content_temp: string;
  utm_term_temp: string;
  landing_page_temp: string;
  conversion_page_temp: string;
  ip_address: string;
}

export const BengaloreRegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    designation: "",

    organization: "",
    industry: "",
    employeeSize: "",
    phoneNumber: "",
    officialEmail: "",
    personalEmail: "",
    city: "",

    pincode: "",
    termsAccepted: false,
    // detailsDisclosure: false,
    dataConsent: true, // Pre-checked
    marketingConsent: true, // Pre-checked
    sponsorSharingConsent: true, // Pre-checked
    utm_campaign_temp: "",
    utm_medium_temp: "",
    utm_source_temp: "",
    utm_content_temp: "",
    utm_term_temp: "",
    landing_page_temp: "",
    conversion_page_temp: "",
    ip_address: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormDataType, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const industries = ["Media & Entertainment", "Retail", "Manufacturing", "Automotive", "Telecom", "Ecommerce", "Oil & Gas", "IT", "Healthcare", "Real Estate", "Other"];
  const employeeSizes = ["0-100", "100-200", "200-300", "300-400", "400-500", "500-1000", "1000-5000", "5000+"];

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_campaign_temp: queryParams.get('utm_campaign') || '',
      utm_medium_temp: queryParams.get('utm_medium') || '',
      utm_source_temp: queryParams.get('utm_source') || '',
      utm_content_temp: queryParams.get('utm_content') || '',
      utm_term_temp: queryParams.get('utm_term') || '',
      landing_page_temp: document.referrer || '',
      conversion_page_temp: window.location.href
    }));

    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => {
        setFormData(prev => ({ ...prev, ip_address: data.ip || '' }));
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormDataType, string>> = {};
    for (const key in formData) {
      const val = formData[key as keyof FormDataType];

      const isOptional = key === "personalEmail" || key.endsWith("_temp") || key === "ip_address" ||
        key === "dataConsent" || key === "marketingConsent" || key === "sponsorSharingConsent";

      if (!isOptional) {
        if ((key === "termsAccepted" ) && !val) {
          newErrors[key as keyof FormDataType] = "This field is required.";
        } else if (typeof val === "string" && !val.trim()) {
          newErrors[key as keyof FormDataType] = "This field is required.";
        }
      }
    }

    if (!recaptchaToken) {
      setServerError("Please complete the reCAPTCHA.");
      return false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setSuccessMessage(null);

    if (!validate()) return;

    setSubmitting(true);
    try {
      // Map frontend camelCase to backend snake_case
      const payload = {
        ...formData,
        official_email: formData.officialEmail,
        phone_number: formData.phoneNumber,
        personal_email:formData.personalEmail,
        recaptchaToken,
      };
      delete payload.officialEmail;
      delete payload.personalEmail;
      delete payload.phoneNumber;


      const resp = await axios.post(
        "https://olive-elk-842602.hostingersite.com/api/bangalore-registers",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      
      // const resp = await axios.post(
      //   "http://127.0.0.1:8000/api/bangalore-registers",
      //   payload,
      //   { headers: { "Content-Type": "application/json" } }
      // );
      setSuccessMessage(resp.data.message || "Thank You for your registration. We will reach out to you shortly.");
      setFormData({
        name: "",
        designation: "",
       
        organization: "",
        industry: "",
        employeeSize: "",
        phoneNumber: "",
        officialEmail: "",
        personalEmail: "",
        city: "",
      
        pincode: "",
        termsAccepted: false,
        // detailsDisclosure: false,
        dataConsent: true,
        marketingConsent: true,
        sponsorSharingConsent: true,
        utm_campaign_temp: "",
        utm_medium_temp: "",
        utm_source_temp: "",
        utm_content_temp: "",
        utm_term_temp: "",
        landing_page_temp: "",
        conversion_page_temp: "",
        ip_address: ""
      });
      setErrors({});
      setRecaptchaToken(null);
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 422 && err.response?.data?.message) {
        const srvErrs: Partial<Record<keyof FormDataType, string>> = {};
        if (err.response.data.errors) {
          // Map backend snake_case to frontend camelCase
          for (const field in err.response.data.errors) {
            const frontendField = field.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
            srvErrs[frontendField as keyof FormDataType] = err.response.data.errors[field][0];
          }
        } else {
          setServerError(err.response.data.message);
        }
        setErrors(srvErrs);
      } else {
        setServerError(
          err.response?.data?.message || "Something went wrong. Please try again."
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-900 text-white" id="register">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center font-orbitron">
          Register Now for AI Innovation Summit – Bengaluru
        </h2>

        {serverError && <div className="mb-4 text-red-400 text-center">{serverError}</div>}
        {successMessage && <div className="mb-4 text-green-400 text-center">{successMessage}</div>}

        <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hidden Fields */}
          <input type="hidden" name="utm_campaign_temp" value={formData.utm_campaign_temp} />
          <input type="hidden" name="utm_medium_temp" value={formData.utm_medium_temp} />
          <input type="hidden" name="utm_source_temp" value={formData.utm_source_temp} />
          <input type="hidden" name="utm_content_temp" value={formData.utm_content_temp} />
          <input type="hidden" name="utm_term_temp" value={formData.utm_term_temp} />
          <input type="hidden" name="landing_page_temp" value={formData.landing_page_temp} />
          <input type="hidden" name="conversion_page_temp" value={formData.conversion_page_temp} />
          <input type="hidden" name="ip_address" value={formData.ip_address} />

          {/* Input Fields */}
          {[
            { name: "name", label: "Name" },
            { name: "designation", label: "Designation" },
           
            { name: "organization", label: "Organization" },
            { name: "phoneNumber", label: "Phone Number" },

            { name: "officialEmail", label: "Official Email" },
            { name: "personalEmail", label: "Personal Email (optional)" },
            { name: "city", label: "City" },
          
            { name: "pincode", label: "Pincode" }
          ].map(field => (
            <div key={field.name}>
              <label className="block mb-1 font-semibold font-orbitron">{field.label}</label>
              <input
                type={field.name.includes("Email") ? "email" : field.name.includes("Number") ? "tel" : "text"}
                name={field.name}
                value={formData[field.name as keyof FormDataType] as string}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-black"
              />
              {errors[field.name as keyof FormDataType] && (
                <p className="text-red-400 text-sm mt-1">{errors[field.name as keyof FormDataType]}</p>
              )}
            </div>
          ))}

          {/* Industry */}
          <div>
            <label className="block mb-1 font-semibold font-orbitron">Industry</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
            >
              <option value="">Select Industry</option>
              {industries.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
            {errors.industry && <p className="text-red-400 text-sm mt-1">{errors.industry}</p>}
          </div>

          {/* Employee Size */}
          <div>
            <label className="block mb-1 font-semibold font-orbitron">Employee Size</label>
            <select
              name="employeeSize"
              value={formData.employeeSize}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
            >
              <option value="">Select Size</option>
              {employeeSizes.map(size => <option key={size} value={size}>{size}</option>)}
            </select>
            {errors.employeeSize && <p className="text-red-400 text-sm mt-1">{errors.employeeSize}</p>}
          </div>

          {/* Terms and Disclosure */}
          <div className="md:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1"
              />
              <span>I have read & agree with <Link to="/terms-and-conditions" className="text-neon-blue">Terms & Conditions</Link> </span>
            </label>
            {errors.termsAccepted && <p className="text-red-400 text-sm mt-1">{errors.termsAccepted}</p>}
          </div>

          {/* <div className="md:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="detailsDisclosure"
                checked={formData.detailsDisclosure}
                onChange={handleChange}
                className="mt-1"
              />
              <span>I agree to the disclosure of details</span>
            </label>
            {errors.detailsDisclosure && <p className="text-red-400 text-sm mt-1">{errors.detailsDisclosure}</p>}
          </div> */}
          {/* New Consent Checkboxes */}
          <div className="md:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="dataConsent"
                checked={formData.dataConsent}
                onChange={handleChange}
                className="mt-1"
              />
              <span>I consent to the collection and processing of my personal data by The Guild (Polygon Media Pvt. Ltd.) for the purpose of registering and communicating with me regarding this event. I have read and agree to the <Link to="/privacy-policy" className="text-neon-blue"> Privacy Policy</Link>.</span>
            </label>
          </div>

          <div className="md:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
                className="mt-1"
              />
              <span>I would like to receive occasional updates, insights, and promotional content from The Guild and its platforms, including SME Futures, Guild Live, and CIO Guild.</span>
            </label>
          </div>

          <div className="md:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="sponsorSharingConsent"
                checked={formData.sponsorSharingConsent}
                onChange={handleChange}
                className="mt-1"
              />
              <span>I agree to have my name, designation, and company shared with select sponsors or partners of this event for relevant business communication.</span>
            </label>
          </div>
          {/* reCAPTCHA */}
          <div className="md:col-span-2">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={token => setRecaptchaToken(token)}
              theme="dark"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              disabled={submitting}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
            <p className="text-xs mt-2 text-gray-400">
              You can withdraw your consent at any time by contacting us at guildconferences@guildlive.com.
              All data will be processed in accordance with The Guild's <Link to="/privacy-policy" className="text-neon-blue"> Privacy Policy</Link>  and applicable data protection laws.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};