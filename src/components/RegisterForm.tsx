"use client";

import React, { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    company: "",
    industry: "",
    employeeSize: "",
    contactNumber: "",
    officialEmail: "",
    personalEmail: "",
    city: "",
    pincode: "",
    termsAccepted: false,
    detailsDisclosure: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const industries = [
    "Media & Entertainment", "Retail", "Manufacturing", "Automotive", "Telecom",
    "Ecommerce", "Oil & Gas", "IT", "Healthcare", "Real Estate", "Other"
  ];

  const employeeSizes = ["0-100", "100-200", "200-300", "300-400", "400-500", "500+"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    for (const key in formData) {
      const value = formData[key as keyof typeof formData];
      if (key === "termsAccepted" || key === "detailsDisclosure") {
        if (!value) newErrors[key] = "This field is required.";
      } else {
        if (!value || (typeof value === "string" && value.trim() === ""))
          newErrors[key] = "This field is required.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-900 text-white" id="register">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-8 text-center text-gradient font-orbitron"> Register Now for AI Innovation Summit</h2>
        <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text Fields */}
          {[
            { name: "name", label: "Name" },
            { name: "designation", label: "Designation" },
            { name: "company", label: "Company" },
            { name: "contactNumber", label: "Contact Number" },
            { name: "officialEmail", label: "Official Email" },
            { name: "personalEmail", label: "Personal Email" },
            { name: "city", label: "City" },
            { name: "pincode", label: "Pincode" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block mb-1 font-semibold font-orbitron">{field.label}</label>
              <input
                type={field.name.includes("Email") ? "email" : "text"}
                name={field.name}
                value={formData[field.name as keyof typeof formData] as string}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-black"
              />
              {errors[field.name] && (
                <p className="text-red-400 text-sm mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}

          {/* Industry Select */}
          <div>
            <label className="block mb-1 font-semibold font-orbitron">Industry</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
            >
              <option value="">Select Industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            {errors.industry && (
              <p className="text-red-400 text-sm mt-1">{errors.industry}</p>
            )}
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
              {employeeSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            {errors.employeeSize && (
              <p className="text-red-400 text-sm mt-1">{errors.employeeSize}</p>
            )}
          </div>
          <div >

          </div>
          <div className="md:col-span-2">

            <span> We respect your privacy and will never share your information.</span>


          </div>
          {/* Checkboxes (span 2 cols) */}
          <div className="md:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1"
              />
              <span>I have read & agree with Terms & Conditions</span>
            </label>
            {errors.termsAccepted && (
              <p className="text-red-400 text-sm mt-1">{errors.termsAccepted}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="detailsDisclosure"
                checked={formData.detailsDisclosure}
                onChange={handleChange}
                className="mt-1"
              />
              <span>
                I confirm my agreement to disclose my details to The Guild, as
                well as the partners and sponsors of the event.
              </span>
            </label>
            {errors.detailsDisclosure && (
              <p className="text-red-400 text-sm mt-1">{errors.detailsDisclosure}</p>
            )}
          </div>

          {/* Submit Button (span 2 cols) */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-blue-600 text-white btn-gradient font-medium px-3 py-1.5 rounded text-lg hover:bg-blue-700"
            >
              Submit
            </button>

          </div>
        </form>
      </div>
    </section>
  );
};
