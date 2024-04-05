import Contact from "../Contact/Contact"

function ContactList({data = [], onDelete}) {

  return (
    <>
    <ul>
        {data.map(contact => (
          <Contact contact={contact} key={contact.id} onDelete={onDelete} />
      ))}
      </ul>
    </>
  )
}

export default ContactList
