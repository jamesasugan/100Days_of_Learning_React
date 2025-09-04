const InputField = ({ label, type="text", autoComplete="none", name, value, onChange, error, placeholder }) => {
  return (
    <fieldset className="fieldset">
      <label htmlFor={name} className="fieldset-legend text-gray-800 text-base">{label}</label>
      <input 
        autoComplete={autoComplete}
        type={type} 
        id={name} 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
        className="input bg-gray-200" 
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </fieldset>
  );
};

export default InputField;
