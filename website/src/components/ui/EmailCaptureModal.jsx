import React, { useState } from 'react';
import './EmailCaptureModal.css';

const EmailCaptureModal = ({ isOpen, onClose, planType, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Check if email is a company email (not from common free email providers)
  const isCompanyEmail = (email) => {
    const freeEmailDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 
      'icloud.com', 'mail.com', 'protonmail.com', 'yandex.com', 'zoho.com'
    ];
    
    const domain = email.split('@')[1];
    return domain && !freeEmailDomains.includes(domain.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess(false);
    setIsSubmitting(true);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Check if it's a company email
    if (!isCompanyEmail(email)) {
      setSubmitError('Please use a company email address');
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit(email, planType);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setEmail('');
      // Close modal after a short delay
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      setSubmitError(error.message || 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`email-capture-modal-overlay ${isOpen ? 'visible' : ''}`}
      onClick={onClose}
    >
      <div 
        className="email-capture-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="modal-close-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6">
          <div className="text-center mb-6">
            <div className="mx-auto bg-[#c18b13] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Before we get started...
            </h3>
            <p className="text-gray-600">
              I'll need your company email to proceed with the <span className="font-semibold text-[#c18b13]">{planType} Plan</span>
            </p>
          </div>

          {submitSuccess ? (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-900 mb-1">Thank you!</p>
              <p className="text-gray-600 text-sm">We'll contact you shortly about your {planType} plan.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c18b13] focus:border-[#c18b13] transition text-black"
                  placeholder="you@company.com"
                />
                <p className="mt-1 text-xs text-gray-500">Please use your company email address</p>
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                  {submitError}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 px-4 py-3 bg-[#c18b13] text-white rounded-lg hover:bg-[#a8760f] transition ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Continue'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailCaptureModal;