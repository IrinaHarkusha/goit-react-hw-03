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

  const [searchStr, setSearchStr] = useState('')

  const handleDelete = id => {
    setData(prev => prev.filter(item => item.id !== id))
  }

  const getFilteresData = () => {
    return data.filter(item => item.name.toLowerCase().includes(searchStr.toLowerCase()) || item.number.includes(searchStr.toLowerCase())
    )
  }
  const filteredData = getFilteresData()

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchStr={searchStr} setSearch={setSearchStr} />
      <ContactList data={filteredData} onDelete={handleDelete} />
    </div>
  )
}

export default App
