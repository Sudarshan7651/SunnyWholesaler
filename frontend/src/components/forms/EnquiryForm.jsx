import { useState } from 'react';
import Button from '../common/Button';
import InputField from '../common/InputField';
import { businessInfo } from '../../data/siteContent';

const initialState = {
  name: '',
  businessName: '',
  phone: '',
  interest: '',
};

function EnquiryForm() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = [
      'Hi, I would like to make a wholesale enquiry.',
      `Name: ${formData.name}`,
      `Business: ${formData.businessName}`,
      `Phone / WhatsApp: ${formData.phone}`,
      `Interested in: ${formData.interest}`,
    ].join('\n');

    window.location.href = `${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="enquiry-wrap">
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <InputField label="Your name" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required />
          <InputField label="Store / business name" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Your store name" required />
          <InputField label="Phone / WhatsApp number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 phone number" required />
          <label className="field-group" htmlFor="interest">
            <span>What are you looking for?</span>
            <select id="interest" name="interest" value={formData.interest} onChange={handleChange} className="form-control" required>
              <option value="" disabled>Select an option</option>
              <option value="Young Fit men’s shirts">Young Fit men’s shirts</option>
              <option value="Kids’ & junior boys’ garments">Kids’ & junior boys’ garments</option>
              <option value="Fabric or print details">Fabric or print details</option>
              <option value="General catalog request">General catalog request</option>
            </select>
          </label>
        </div>
        <p className="form-note">Your enquiry opens as a pre-filled message in WhatsApp for you to review and send.</p>
        <Button type="submit" variant="primary" className="submit-button">Continue to WhatsApp <span aria-hidden="true">↗</span></Button>
      </form>
    </div>
  );
}

export default EnquiryForm;
