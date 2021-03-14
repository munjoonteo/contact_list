import React, { useState } from "react";

import "./Contact.css";

function Contact({ contact }) {
  let [isOpen, setIsOpen] = useState(false);

  let toggleDropdown = e => setIsOpen(!isOpen);

  function renderDropdown() {
    return (
      <div className="contact-info">
        <div>
          <span className="label">website </span>
          {contact.website}
        </div>
        <div>
          <span className="label">company </span>
          {contact.company.name}
        </div>
        <div className="label">address</div>
        <div>{contact.address.suite + " " + contact.address.street}</div>
        <div>{contact.address.city}</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="left">
        <div className="contact-name">
          {contact.name + " (" + contact.username + ")"}
        </div>
        <div className="contact-info">
          <span className="label">email </span>
          {contact.email}
        </div>
        <div className="contact-info">
          <span className="label">phone </span>
          {contact.phone}
        </div>
        {isOpen && renderDropdown()}
      </div>
      <div className="right">
        <button onClick={toggleDropdown}>{isOpen ? "▲" : "▼"}</button>
      </div>
    </div>
  );
}

export default Contact;
