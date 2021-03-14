import React from "react";
import Contact from "./Contact";

function sortByName(a, b) {
  let nameA = a.name.toUpperCase(); // ignore upper and lowercase
  let nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

function ContactsList({ contacts, sort }) {
  if (sort === "a-z") {
    contacts.sort((a, b) => sortByName(a, b));
  } else {
    contacts.sort((a, b) => sortByName(a, b)).reverse();
  }

  let components = contacts.map(contact => (
    <Contact contact={contact} key={contact.name} />
  ));

  return <div>{components}</div>;
}

export default ContactsList;
