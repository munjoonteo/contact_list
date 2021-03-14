import React, { useState, useEffect, useMemo } from "react";
import Media from "react-media";

import HeaderData from "./TableHeader";
import ContactsTable from "./ContactsTable";
import ContactsList from "./ContactsList";

import "./App.css";

function App() {
  let [contacts, setContacts] = useState([]);
  let [sorted, setSorted] = useState("a-z");

  const columns = useMemo(() => HeaderData, []);

  function getContacts() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setContacts(json));
  }

  function changeSort() {
    sorted === "a-z" ? setSorted("z-a") : setSorted("a-z");
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="App">
      <div className="heading">Contacts</div>
      <div className="subheading">Say hi!</div>
      <Media
        queries={{
          small: "(max-width: 1200px)",
          large: "(min-width: 1201px)",
        }}
      >
        {matches => (
          <div>
            {matches.large && (
              <div className="contacts">
                <ContactsTable columns={columns} data={contacts} />
              </div>
            )}
            {matches.small && (
              <div>
                <div className="sort-container">
                  <div className="sort-text">Sort: </div>
                  <div onClick={changeSort}>
                    {sorted === "a-z"
                      ? "Alphabetically (A-Z)"
                      : "Alphabetically (Z-A)"}
                  </div>
                </div>
                <div className="contacts">
                  <ContactsList contacts={contacts} sort={sorted} />
                </div>
              </div>
            )}
          </div>
        )}
      </Media>
    </div>
  );
}

export default App;
