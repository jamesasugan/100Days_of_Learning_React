const SelectField = ({ label, name, autoComplete = "none", value, onChange, options, error }) => {
  return (
    <fieldset className="fieldset">
      <label htmlFor={name} className="fieldset-legend text-gray-800 text-base">{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        className="select bg-gray-200"
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </fieldset>
  )
}

export default SelectField
