function InputField({ label, name, type = 'text', value, onChange, placeholder, required = false, as = 'input' }) {
  const sharedProps = {
    id: name,
    name,
    value,
    onChange,
    placeholder,
    required,
    className: 'form-control',
  };

  return (
    <label className="field-group" htmlFor={name}>
      {label && <span>{label}</span>}
      {as === 'textarea' ? <textarea {...sharedProps} rows={5} /> : <input type={type} {...sharedProps} />}
    </label>
  );
}

export default InputField;
