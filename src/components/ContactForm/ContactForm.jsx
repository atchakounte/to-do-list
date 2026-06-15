import React from "react";
import "./ContactForm.css";

const ContactForm = ({ addContactForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const firstNameField = document.querySelector("[name=firstName]");
    const lastNameField = document.querySelector("[name=lastName]");
    const emailField = document.querySelector("[name=email]");
    const commentField = document.querySelector("[name=comment]");

    const firstNameValue = firstNameField.value;
    const lastNameValue = lastNameField.value;
    const emailFieldValue = emailField.value;
    const commentFieldValue = commentField.value;

    firstNameField.value = "";
    lastNameField.value = "";
    emailField.value = "";
    commentField.value = "";

    addContactForm(
      firstNameValue,
      lastNameValue,
      emailFieldValue,
      commentFieldValue,
    );
  };

  return (
    <section class="contact-form">
      <h2>Contact Form</h2>
      <form action="#" method="GET" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            First Name:
            <input type="text" name="firstName" placeholder="first name" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Last Name:
            <input type="text" name="lastName" placeholder="last name" />
          </label>
        </div>
        <div className="form-row">
          <label>
            E-mail:
            <input type="text" name="email" placeholder="e-mail" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Comment:
            <input type="text" name="comment" placeholder="comment" />
          </label>
        </div>
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
