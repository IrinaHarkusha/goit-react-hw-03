import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import "modern-normalize"
import "./App.css"
import contacts from "./assets/contact.json"
import { useState } from "react"
// import { nanoid } from 'nanoid'
// import * as Yup from 'yup'

const App = () => {
  const [data, setData] = useState(contacts)


  const handleDelete = id => {
    setData(prev => prev.filter(item => item.id !== id))
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList data={data} onDelete={handleDelete} />
    </div>
  )
}

export default App