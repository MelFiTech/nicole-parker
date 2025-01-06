'use client';

import React, { useState } from 'react';

const AccessModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://submit-form.com/ld8dSV3kC', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(Object.fromEntries(formData))
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setIsSubmitting(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={handleBackdropClick}>
      <div className="bg-[#DEB887] p-4 sm:p-8 rounded-lg w-full max-w-md mx-auto">
        {showSuccess ? (
          <div className="text-center text-[#623E2A]">
            <h3 className="text-xl sm:text-2xl font-serif mb-4">Thank you!</h3>
            <p className="text-sm sm:text-base">Your submission has been received.</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-center font-serif">
              Receive Inside Access to Nicole's Beauty Details
            </h2>
            
            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  className="w-full p-2 sm:p-3 rounded bg-[#A0826D] text-white placeholder-gray-300 font-sans text-sm sm:text-base"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS" 
                  className="w-full p-2 sm:p-3 rounded bg-[#A0826D] text-white placeholder-gray-300 font-sans text-sm sm:text-base"
                  required
                />
              </div>
              
              <div className="flex">
                <select className="p-2 sm:p-3 rounded bg-[#A0826D] text-white w-16 sm:w-20 font-sans text-sm sm:text-base" name="countryCode">
                  <option>+1</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  className="w-full p-2 sm:p-3 rounded bg-[#A0826D] text-white ml-2 font-sans placeholder-gray-300 text-sm sm:text-base"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-2 sm:p-3 bg-black text-white rounded hover:bg-gray-800 font-sans relative text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent"></div>
                  </div>
                ) : (
                  'Preview Inside Access'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AccessModal;