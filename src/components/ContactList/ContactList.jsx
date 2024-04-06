import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"

function ContactList({ data = [], onDelete, searchStr }) {
  
  if (!data.length && searchStr) {
    return <h2 className={s.text}>No such contact exists...</h2>
  } else if (!data.length) {
    return <h2 className={s.text}>No available contacts...</h2>
  }
  return (
    <>
    <ul className={s.list}>
        {data.map(contact => (
          <Contact contact={contact} key={contact.id} onDelete={onDelete} />
      ))}
      </ul>
    </>
  )
}

export default ContactList
