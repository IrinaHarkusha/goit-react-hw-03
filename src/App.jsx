import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import contactsData from "./assets/contact.json";
import { useEffect, useState } from "react";

function App () {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    if (savedContacts?.length) {
      return savedContacts;
    }
    return contactsData;
  })

  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const addContact = (contact) => {
    setContacts((prev) => [contact, ...prev]);
  };

  const getFilteresData = () => {
    return contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(searchStr.toLowerCase()) ||
        item.number.includes(searchStr)
    );
  };
  const filteredData = getFilteresData();

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchStr={searchStr} setSearch={setSearchStr} />
      <ContactList
        searchStr={searchStr}
        data={filteredData}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
