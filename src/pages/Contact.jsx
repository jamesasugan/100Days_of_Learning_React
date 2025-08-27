import { useState } from "react";

const Contact = () => {
  const [successMessage, setsuccessMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});
  
  const initialFormState = {
    subject: "",
    name: "",
    email: "",
    message: "",
    country: "",
    comment: "",
    subscribe: false,
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
  };

  const validate = () => {
    const newErrors = {};
    if(!formData.subject.trim()) newErrors.subject = "Subject is required";
    if(!formData.name.trim()) newErrors.name = "Name is required";
    if(!formData.email.trim()){
      newErrors.email = "Email is required";
    } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if(!formData.message.trim()) newErrors.message = "Message is required";
    if(!formData.country.trim()) newErrors.country = "Country is required";
    if(!formData.comment.trim()) newErrors.comment = "Comment is required";
    return newErrors;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if(Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return
    }
    setErrors({});
    console.log(formData);
    setSubmittedData(formData);  
    setsuccessMessage("Form Submitted!");
    setTimeout(() => {
      setsuccessMessage(""); 
      setSubmittedData(null);
      setFormData(initialFormState);
    }, 3000);

    
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-2xl mt-2">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset className="fieldset">
          <label htmlFor="subject" className="fieldset-legend text-gray-800 text-base">Subject</label>
          <input type="text" id="subject" name="subject" autoComplete="none" value={formData.subject} onChange={handleChange} placeholder="Your message subject" className="input bg-gray-200"/>
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="name" className="fieldset-legend text-gray-800 text-base">What is your name?</label>
          <input type="text" id="name" name="name" autoComplete="none" value={formData.name} onChange={handleChange} placeholder="Your name" className="input bg-gray-200"/>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="email" className="fieldset-legend text-gray-800 text-base">What is your email?</label>
          <input type="email" id="email" name="email" autoComplete="none" value={formData.email} onChange={handleChange} placeholder="Your email" className="input bg-gray-200"/>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="message" className="fieldset-legend text-gray-800 text-base">What is your message?</label>
          <textarea id="message" className="textarea h-24 bg-gray-200" autoComplete="none" value={formData.message} onChange={handleChange} name="message" placeholder="Bio"></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="country" className="fieldset-legend text-gray-800 text-base">What is your country?</label>
          <select value={formData.country} name="country" id="country" autoComplete="none" onChange={handleChange} className="select bg-gray-200">
            <option disabled={true}>Select a country</option>
            <option value="Philippines">Philippines</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="comment" className="fieldset-legend text-gray-800 text-base">What is your comment?</label>
          <textarea id="comment" className="textarea h-24 bg-gray-200" autoComplete="none" value={formData.comment} onChange={handleChange} name="comment" placeholder="Bio"></textarea>
          {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>}
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="subscribe" className="fieldset-legend text-gray-800 text-base">Subscribe to newsletter?</label>
          <input type="checkbox" id="subscribe" name="subscribe" checked={formData.subscribe} onChange={handleChange}
          className="checkbox checkbox-info" />
        </fieldset>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
      
      {submittedData && (
        <div className="p-2 bg-gray-200 rounded mt-5 text-base space-y-1">
          {successMessage && (
            <div role="alert" className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{successMessage}</span>
            </div>
          )}
          <p><strong>Subject: </strong>{submittedData.subject}</p>
          <p><strong>Name: </strong>{submittedData.name}</p>
          <p><strong>Email: </strong>{submittedData.email}</p>
          <p><strong>Message: </strong>{submittedData.message}</p>
          <p><strong>Country: </strong>{submittedData.country}</p>
          <p><strong>Comment: </strong>{submittedData.comment}</p>
          <p><strong>Subscribe: </strong>{submittedData.subscribe ? "Yes" : "No"}</p>
        </div>
      )}

    </div>
  )
}

export default Contact