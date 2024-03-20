import { useState } from "react";
import Button from "../shared/Button";

function ContactForm() {
  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
    nameErrorMessage: "",
    emailErrorMessage: "",
    messageErrorMessage: "",
  });

  const validateForm = (contactFormValues) => {
    const { name, email, message } = contactFormValues;
    // Email regex pattern from https://www.w3resource.com/javascript/form/email-validation.php
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    let newError = { ...error };
  
    if (name === "") {
      newError = { ...newError, name: true, nameErrorMessage: "Can't be empty" };
    }
  
    if (email === "") {
      newError = { ...newError, email: true, emailErrorMessage: "Can't be empty" };
    }
  
    if (!emailRegex.test(email)) {
      newError = { ...newError, email: true, emailErrorMessage: "Please enter a valid email" };
    }
  
    if (message === "") {
      newError = { ...newError, message: true, messageErrorMessage: "Can't be empty" };
    }
  
    // If any error occurred, update the state and throw an error
    if (Object.values(newError).some((value) => value == true)){
      setError(newError);
      throw new Error("Form validation failed");
    }
  }

  const resetFormFieldErrorStatus = (key) => {
    setError({...error, [key]: false, [`${key}ErrorMessage`]: ""});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactFormValues = Array.from(e.target.elements).reduce((acc, input) => {
      if (input.type == "submit") return acc;
      acc[input.id] = input.value;
      return acc;
    }, {});

    try {
      validateForm(contactFormValues);
      // Handle successful form submission here
      console.log("Form submission successful: ", contactFormValues);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <form className="text-white" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col space-y-6">
        {/* TODO finish error handling integration */}
        <div className="flex items-center">
          <input 
            type="text" 
            id="name" 
            placeholder="Name"
            onChange={() => resetFormFieldErrorStatus("name")}
            className="w-full bg-transparent border-b border-white placeholder-white placeholder:opacity-50 pl-3 pb-3 focus:outline-none focus:border-b-3 hover:border-b-3" 
          />
          {error.name && 
            <div className="absolute flex items-center gap-2 right-8 pb-3">
              <p className="text-xs">{error.nameErrorMessage}</p>
              <img src="/designo-website/assets/contact/desktop/icon-error.svg" alt="Error icon" />
            </div>
          }
        </div>
        <div className="flex items-center">
          <input 
            type="email" 
            id="email" 
            placeholder="Email Address"
            onChange={() => resetFormFieldErrorStatus("email")}
            className="w-full bg-transparent border-b border-white placeholder-white placeholder:opacity-50 pl-3 pb-3 focus:outline-none focus:border-b-3 hover:border-b-3" 
          />
          {error.email && 
            <div className="absolute flex items-center gap-2 right-8 pb-3">
              <p className="text-xs">{error.emailErrorMessage}</p>
              <img src="/designo-website/assets/contact/desktop/icon-error.svg" alt="Error icon" />
            </div>
          }
        </div>
        <div className="flex">
          <input 
            type="tel" 
            id="phone" 
            placeholder="Phone"
            className="w-full bg-transparent border-b border-white placeholder-white placeholder:opacity-50 pl-3 pb-3 focus:outline-none focus:border-b-3 hover:border-b-3" 
          />
        </div>
        <div className="flex">
          <textarea 
            id="message" 
            placeholder="Your Message" 
            rows="3"
            onChange={() => resetFormFieldErrorStatus("message")}
            className="w-full bg-transparent border-b border-white placeholder-white placeholder:opacity-50 pl-3 pb-3 focus:outline-none focus:border-b-3 hover:border-b-3" 
          >
          </textarea>
          {error.message && 
            <div className="absolute flex items-center gap-2 right-8 pb-3 pt-1">
              <p className="text-xs">{error.messageErrorMessage}</p>
              <img src="/designo-website/assets/contact/desktop/icon-error.svg" alt="Error icon" />
            </div>
          }
        </div>
      </div>
      <div className="text-center mt-6 md:text-right">
        <Button text="Submit" type="submit" variant="secondary" />
      </div>
    </form>
  );
}

export default ContactForm