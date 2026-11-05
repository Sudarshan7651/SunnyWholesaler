import { useEffect, useState } from 'react';
import Button from '../common/Button';
import InputField from '../common/InputField';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4cZyt_eIlUiPZeEBPAoBlzzkGq9ghtpV2NIV2_LguBj7reBj7_ohVsAK6wE7t4ok/exec";
const initialState = {
  name: '',
  businessName: '',
  phone: '',
  interest: '',
};

function EnquiryForm() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    if (!isSuccessModalOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSuccessModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isSuccessModalOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const payload = new URLSearchParams();

      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: payload.toString(),
      });

      const responseText = await response.text();

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}: ${responseText}`);
      }

      setFormData(initialState);
      setSubmitMessage('Thanks! Your enquiry has been submitted.');
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error('Enquiry submission error:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="enquiry-wrap">
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <InputField
            label="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            required
          />

          <InputField
            label="Store / business name"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Your store name"
            required
          />

          <InputField
            label="Phone / WhatsApp number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 phone number"
            required
          />

          <label className="field-group" htmlFor="interest">
            <span>What are you looking for?</span>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="" disabled>Select an option</option>
              <option value="Young Fit men’s shirts">Young Fit men’s shirts</option>
              <option value="Kids’ & junior boys’ garments">Kids’ & junior boys’ garments</option>
              <option value="Fabric or print details">Fabric or print details</option>
              <option value="General catalog request">General catalog request</option>
            </select>
          </label>
        </div>

        <p className="form-note">Your enquiry will be submitted to the business spreadsheet.</p>

        <Button type="submit" variant="primary" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit enquiry'}
        </Button>

        {submitMessage && (
          <p className="form-status" style={{ marginTop: '12px', color: '#0c0b09' }}>
            {submitMessage}
          </p>
        )}
      </form>

      {isSuccessModalOpen && (
        <div
          className="success-modal-backdrop"
          onClick={() => setIsSuccessModalOpen(false)}
          role="presentation"
        >
          <div
            className="success-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
          >
            <button
              type="button"
              className="success-modal-close"
              aria-label="Close thank you message"
              onClick={() => setIsSuccessModalOpen(false)}
            >
              ×
            </button>

            <div className="success-modal-icon" aria-hidden="true">
              ✓
            </div>

            <h3 id="success-modal-title">Thank you!</h3>
            <p>
              Your enquiry has been sent successfully. Our team will contact you soon.
            </p>

            <Button
              type="button"
              variant="primary"
              className="success-modal-button"
              onClick={() => setIsSuccessModalOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EnquiryForm;
