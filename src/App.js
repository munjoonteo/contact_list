import React, { useState, useEffect, useMemo } from "react";

import ContactsTable from "./ContactsTable";
import HeaderData from "./TableHeader";
import "./App.css";

function App() {
  let [contacts, setContacts] = useState([]);

  const columns = useMemo(() => HeaderData, []);

  function getContacts() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setContacts(json));
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="App">
      <div className="heading">Contacts</div>
      <div className="subheading">Say hi!</div>
      <div className="table">
        <ContactsTable columns={columns} data={contacts} />
      </div>
    </div>
  );
}

export default App;
