import React, { useState, useEffect } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormTitle,
  FormLabel,
  FormInputRow,
  FormButton,
  FormMessage,
} from "./FormStyle";
import { Container } from "../../globalStyle";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = (formData) => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    }
    if (!formData.message) {
      formErrors.message = "Message is required";
    }
    return formErrors;
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    setErrors(validate(formData));
    setIsSubmitted(true);
    e.preventDefault();
  };
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", ...formData }),
      })
        .then(() => alert("Success!"))
        .then(() => setIsSubmitted(false))
        .then(() => setFormData({ name: "", email: "", message: "" }))
        .catch((error) => alert(error));
    }
  }, [errors, formData, isSubmitted]);
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle>Let's Talk</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              <FormInputRow>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
              </FormInputRow>
              <FormInputRow>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </FormInputRow>

              <FormInputRow>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormMessage
                  type="text"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p>{errors.message}</p>}
              </FormInputRow>

              <FormButton type="submit">Let's talk</FormButton>
            </FormWrapper>
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
