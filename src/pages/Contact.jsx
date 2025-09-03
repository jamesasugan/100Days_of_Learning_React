import { useState } from "react";
import { contactSchema } from "../assets/utils/validationSchema";
import InputField from "../components/forms/InputField";
import useForm from "../hooks/useForm";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);

  const initialFormState = {
    subject: "",
    name: "",
    email: "",
    message: "",
    country: "",
    comment: "",
    subscribe: false,
  };

  const { values, errors, setErrors, handleChange, resetForm } = useForm(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactSchema.validate(values, { abortEarly: false });
      
      setErrors({});
      setSubmittedData(values);
      console.log(values);
      setSuccessMessage("Form Submitted!");

      setTimeout(() => {
        setSuccessMessage("");
        setSubmittedData(null);
        resetForm();
        setLoading(false);
      }, 3000);

    } catch (validationError) {
      if (validationError.inner) {
        const formErrors = validationError.inner.reduce((acc, err) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        setErrors(formErrors);
      }
      setLoading(false);
    }
  };

  return (
    <div className="p-6 w-[25rem] mx-auto bg-white shadow-lg rounded-2xl mt-2">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">

        {/* Subject */}
        <InputField 
          label="Subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          error={errors.subject}
          placeholder="Your message subject"
        />

        {/* Name */}
        <InputField 
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="What is your name"
        />

        {/* Email */}
        <InputField 
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="What is your email"
        />

        {/* Message */}
        <fieldset className="fieldset">
          <label htmlFor="message" className="fieldset-legend text-gray-800 text-base">What is your message?</label>
          <textarea
            id="message"
            autoComplete="none"
            className="textarea h-24 bg-gray-200"
            value={values.message}
            onChange={handleChange}
            name="message"
            placeholder="Bio"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </fieldset>

        {/* Country */}
        <fieldset className="fieldset">
          <label htmlFor="country" className="fieldset-legend text-gray-800 text-base">What is your country?</label>
          <select
            value={values.country}
            autoComplete="none"
            name="country"
            id="country"
            onChange={handleChange}
            className="select bg-gray-200"
          >
            <option value="">Select a country</option>
            <option value="Philippines">Philippines</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </fieldset>

        {/* Comment */}
        <fieldset className="fieldset">
          <label htmlFor="comment" className="fieldset-legend text-gray-800 text-base">What is your comment?</label>
          <textarea
            id="comment"
            className="textarea h-24 bg-gray-200"
            value={values.comment}
            onChange={handleChange}
            name="comment"
            placeholder="Comment"
          />
          {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>}
        </fieldset>

        {/* Subscribe */}
        <fieldset className="fieldset">
          <label htmlFor="subscribe" className="fieldset-legend text-gray-800 text-base">Subscribe to newsletter?</label>
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            checked={values.subscribe}
            onChange={handleChange}
            className="checkbox checkbox-info"
          />
        </fieldset>

        <button
          type="submit"
          className={`btn btn-success ${loading ? "btn-disabled" : ""}`}
          disabled={loading}
        >
          {loading && <span className="loading loading-spinner mr-2"></span>}
          {loading ? "Loading..." : "Submit"}
        </button>



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
  );
};

export default Contact;
