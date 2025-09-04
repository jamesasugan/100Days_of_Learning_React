const TextAreaField = ({ label, name, autoComplete = "none", value, onChange, placeholder, error }) => {
  return (
    <fieldset className="fieldset">
        <label htmlFor={name} className="fieldset-legend text-gray-800 text-base">{label}</label>
        <textarea
            id={name}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            className="textarea h-24 bg-gray-200"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
    </fieldset>
  )
}

export default TextAreaField