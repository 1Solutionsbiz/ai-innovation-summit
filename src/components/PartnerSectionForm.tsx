// src/pages/dashboard/PartnerSectionForm.tsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

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
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        "https://darkorange-flamingo-563587.hostingersite.com/api/partner-register",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

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
          Partner Section Form
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
                value={formData[field.name as keyof FormData]}
                onChange={handleChange}
                className="border border-gray-600 rounded px-3 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors[field.name as keyof FormData] && (
                <span className="text-red-400 text-sm">{errors[field.name as keyof FormData]}</span>
              )}
            </div>
          ))}

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
              value={formData[field as keyof FormData]}
            />
          ))}

          <div className="sm:col-span-2 mt-4">
            <ReCAPTCHA
              sitekey="6LfhcysrAAAAAGAo4G_2kXen3oBn290aZNX7caV_"
              onChange={token => setRecaptchaToken(token)}
              theme="dark"
            />
          {serverError && <div className="text-red-500  mb-4">{serverError}</div>}
          </div>
          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={submitting}
              className={`${submitting ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"} text-white px-6 py-2 rounded font-semibold w-full sm:w-auto`}
            >
         
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
