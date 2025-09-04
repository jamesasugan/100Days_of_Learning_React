const CheckboxField = ({ label, name, checked, onChange, error }) => {
  return (
    <fieldset className="fieldset">
      <label htmlFor={name} className="fieldset-legend text-gray-800 text-base">
        {label}
      </label>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="checkbox checkbox-info"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </fieldset>
  );
};

export default CheckboxField;
