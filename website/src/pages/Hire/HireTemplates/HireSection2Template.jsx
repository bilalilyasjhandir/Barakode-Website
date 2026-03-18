import React, { useState } from "react";
import { ContactService } from '@/lib/supabase';
import { useTranslation } from "react-i18next";

export default function HireSection2Template() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous messages
    setSubmitSuccess(false);
    setSubmitError("");
    setIsSubmitting(true);
    
    try {
      // Submit to the new hire_requests table
      const hireRequestData = {
        full_name: formData.name,
        email_address: formData.email,
        phone_number: formData.phone,
        company: formData.company || null,
        project_details: formData.message
      };
      
      const result = await ContactService.submitHireRequest(hireRequestData);
      
      if (result.success) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });
      } else {
        setSubmitError(result.error || "Failed to submit form. Please try again.");
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white" data-theme="light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("individualHire.common.scheduleConsultation")}
          </h2>
          <div className="w-20 h-1 bg-[#c18b13] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("individualHire.common.consultationSubtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              {t("individualHire.common.successMessage")}
            </div>
          )}
          
          {submitError && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {submitError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("individualHire.common.fullName")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c18b13] focus:border-[#c18b13] transition"
                  placeholder={t("individualHire.common.namePlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("individualHire.common.emailAddress")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c18b13] focus:border-[#c18b13] transition"
                  placeholder={t("individualHire.common.emailPlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("individualHire.common.phoneNumber")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c18b13] focus:border-[#c18b13] transition"
                  placeholder={t("individualHire.common.phonePlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("individualHire.common.company")}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c18b13] focus:border-[#c18b13] transition"
                  placeholder={t("individualHire.common.companyPlaceholder")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t("individualHire.common.projectDetails")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c18b13] focus:border-[#c18b13] transition"
                placeholder={t("individualHire.common.projectPlaceholder")}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-block bg-[#c18b13] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#a8760f] transition duration-300 transform hover:scale-105 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? t("individualHire.common.submitting") : t("individualHire.common.scheduleBtn")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}