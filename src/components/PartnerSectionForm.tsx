import React, { useState } from "react";

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
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
      } else {
        if (key === "officialEmail" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[key] = "Enter a valid email";
        }
        if ((key === "phoneNumber" || key === "mobileNumber") && !/^\d{10}$/.test(value)) {
          newErrors[key] = "Enter a 10-digit number";
        }
        if (key === "pincode" && !/^\d{6}$/.test(value)) {
          newErrors[key] = "Enter a valid 6-digit pincode";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="p-8 max-w-3xl mx-auto bg-gray-100 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Partner Section Form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        noValidate
      >
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
        ].map((field) => (
          <div key={field.name} className="flex flex-col">
            <label className="font-medium mb-1">{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name as keyof FormData]}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
            />
            {errors[field.name] && (
              <span className="text-red-500 text-sm">{errors[field.name]}</span>
            )}
          </div>
        ))}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
