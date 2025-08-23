import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted: ", formData);
    alert(`Thank you, ${formData.name}! We'll reply to ${formData.email}.`);
    setFormData({subject: "", name: "", email: "", message: "", subscribe: false});
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-2xl mt-2">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset className="fieldset">
          <label htmlFor="subject" className="fieldset-legend text-gray-800 text-base">Subject</label>
          <input type="text" id="subject" name="subject" autoComplete="none" value={formData.subject} onChange={handleChange} placeholder="Your message subject" className="input bg-gray-200"/>
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="name" className="fieldset-legend text-gray-800 text-base">What is your name?</label>
          <input type="text" id="name" name="name" autoComplete="none" value={formData.name} onChange={handleChange} placeholder="Your name" className="input bg-gray-200"/>
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="email" className="fieldset-legend text-gray-800 text-base">What is your email?</label>
          <input type="email" id="email" name="email" autoComplete="none" value={formData.email} onChange={handleChange} placeholder="Your email" className="input bg-gray-200"/>
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="message" className="fieldset-legend text-gray-800 text-base">What is your message?</label>
          <textarea id="message" className="textarea h-24 bg-gray-200" autoComplete="none" value={formData.message} onChange={handleChange} name="message" placeholder="Bio"></textarea>
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="subscribe" className="fieldset-legend text-gray-800 text-base">Subscribe to newsletter?</label>
          <input type="checkbox" id="subscribe" name="subscribe" value={formData.subscribe} onChange={(e) => setFormData(prev => ({...prev, subscribe: e.target.checked}))} className="checkbox checkbox-info" />
        </fieldset>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
      <div className="p-2 bg-gray-200 rounded mt-5 text-base space-y-1">
        <h2>Preview</h2>
        <p>Subject: {formData.subject}</p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Message: {formData.message}</p>
        <p>Subscribe: {formData.subscribe ? "Yes" : "No"}</p>
      </div>
    </div>
  )
}

export default Contact