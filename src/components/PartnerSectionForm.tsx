import React, { useState, useEffect } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

interface FormData {
  name: string;
  designation: string;
  officialEmail: string;
  phoneNumber: string;
  mobileNumber: string;
  industry: string;
  organization: string;
  city: string;
  state: string;
  pincode: string;
  termsAccepted: boolean;
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

export const PartnerSectionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    designation: "",
    officialEmail: "",
    phoneNumber: "",
    mobileNumber: "",
    industry: "",
    organization: "",
    city: "",
    state: "",
    pincode: "",
    termsAccepted: false,
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
    ip_address: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source_temp: params.get("utm_source") || "",
      utm_medium_temp: params.get("utm_medium") || "",
      utm_campaign_temp: params.get("utm_campaign") || "",
      utm_term_temp: params.get("utm_term") || "",
      utm_content_temp: params.get("utm_content") || "",
      landing_page_temp: document.referrer || "",
      conversion_page_temp: window.location.href,
    }));

    axios.get("https://api.ipify.org?format=json")
      .then(res => {
        setFormData(prev => ({ ...prev, ip_address: res.data.ip || "" }));
      })
      .catch(err => console.error("IP fetch error:", err));
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
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    const requiredFields = [
      "name", "designation", "officialEmail", "phoneNumber", "mobileNumber",
      "industry", "organization", "city", "state", "pincode"
    ];

    requiredFields.forEach(key => {
      const val = formData[key as keyof FormData] as string;
      if (!val.trim()) newErrors[key as keyof FormData] = "This field is required";
      if (key === "officialEmail" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        newErrors[key as keyof FormData] = "Enter a valid email";
      }
      if ((key === "phoneNumber" || key === "mobileNumber") && val && !/^\d{10}$/.test(val)) {
        newErrors[key as keyof FormData] = "Enter a 10-digit number";
      }
      if (key === "pincode" && val && !/^\d{6}$/.test(val)) {
        newErrors[key as keyof FormData] = "Enter a valid 6-digit pincode";
      }
      // Specific validation for checkbox fields
      if (!formData.termsAccepted) {
        newErrors.termsAccepted = "You must accept the terms and conditions";
      }

    });

    if (!recaptchaToken) {
      setServerError("Please verify you are not a robot.");
      return false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setSubmitting(true);
    try {
      const payload = { ...formData, recaptcha_token: recaptchaToken };

      const resp = await axios.post(
        "https://olive-elk-842602.hostingersite.com/api/partner-register",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      // const resp = await axios.post(
      //   "http://127.0.0.1:8000/api/partner-register",
      //   payload,
      //   { headers: { "Content-Type": "application/json" } }
      // );
      alert(resp.data.message || "Thank You for your registration. We will reach out to you shortly.");

      setFormData(prev => ({
        ...prev,
        name: "",
        designation: "",
        officialEmail: "",
        phoneNumber: "",
        mobileNumber: "",
        industry: "",
        organization: "",
        city: "",
        state: "",
        pincode: "",
        termsAccepted: true,
        dataConsent: true, // Reset to checked
        marketingConsent: true, // Reset to checked
        sponsorSharingConsent: true, // Reset to checked
      }));
      setErrors({});
      setRecaptchaToken(null);
    } catch (err: any) {
      console.error(err);
      if (err.response?.data?.errors) {
        const srv: Partial<Record<keyof FormData, string>> = {};
        Object.entries(err.response.data.errors).forEach(([k, v]: any) => {
          srv[k as keyof FormData] = v[0];
        });
        setErrors(srv);
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
    <section className="w-full bg-gray-900 py-[200px] px-4">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-md shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-center text-gradient font-orbitron">
          Register to Partner with Us
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full" noValidate>
          {[
            { label: "Name", name: "name" },
            { label: "Designation", name: "designation" },
            { label: "Official Email", name: "officialEmail", type: "email" },
            { label: "Phone Number", name: "phoneNumber" },
            { label: "Mobile Number", name: "mobileNumber" },
            { label: "Industry", name: "industry" },
            { label: "Organization", name: "organization" },
            { label: "City", name: "city" },
            { label: "State", name: "state" },
            { label: "Pin Code", name: "pincode" },
          ].map(field => (
            <div key={field.name} className="flex flex-col">
              <label className="font-medium mb-1 text-white font-orbitron">{field.label}</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name as keyof FormData] as string}
                onChange={handleChange}
                className="border border-gray-600 rounded px-3 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors[field.name as keyof FormData] && (
                <span className="text-red-400 text-sm">{errors[field.name as keyof FormData]}</span>
              )}
            </div>
          ))}
          <div className="md:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1"
              />
              <span className="text-white">I have read & agree with <Link to="/terms-and-conditions" className="text-neon-blue">Terms & Conditions</Link></span>
            </label>
            {errors.termsAccepted && <p className="text-red-400 text-sm mt-1">{errors.termsAccepted}</p>}
          </div>
          {/* Consent Checkboxes */}
          <div className="sm:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="dataConsent"
                checked={formData.dataConsent}
                onChange={handleChange}
                className="mt-1"
              />
              <span className="text-white">I consent to the collection and processing of my personal data by The Guild (Polygon Media Pvt. Ltd.) for the purpose of registering and communicating with me regarding this event. I have read and agree to the <Link to="/privacy-policy" className="text-neon-blue"> Privacy Policy</Link>.</span>
            </label>
          </div>

          <div className="sm:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
                className="mt-1"
              />
              <span className="text-white">I would like to receive occasional updates, insights, and promotional content from The Guild and its platforms, including SME Futures, Guild Live, and CIO Guild.</span>
            </label>
          </div>

          <div className="sm:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="sponsorSharingConsent"
                checked={formData.sponsorSharingConsent}
                onChange={handleChange}
                className="mt-1"
              />
              <span className="text-white">I agree to have my name, designation, and company shared with select sponsors or partners of this event for relevant business communication.</span>
            </label>
          </div>

          {[
            "utm_source_temp",
            "utm_medium_temp",
            "utm_campaign_temp",
            "utm_term_temp",
            "utm_content_temp",
            "landing_page_temp",
            "conversion_page_temp",
            "ip_address",
          ].map(field => (
            <input
              key={field}
              type="hidden"
              name={field}
              value={formData[field as keyof FormData] as string}
            />
          ))}

          <div className="sm:col-span-2 mt-4">
            <ReCAPTCHA
              sitekey="6LfhcysrAAAAAGAo4G_2kXen3oBn290aZNX7caV_"
              onChange={token => setRecaptchaToken(token)}
              theme="dark"
            />
            {serverError && <div className="text-red-500 mb-4">{serverError}</div>}
          </div>
          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={submitting}
              className={`${submitting ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"} text-white px-6 py-2 rounded font-semibold w-full sm:w-auto`}
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