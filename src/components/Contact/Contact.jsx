
function Contact({contact, onDelete}) {
  const {id, name, number} = contact
  return (
    
      <li>
        <h3>Name: {name}</h3>
        <p>Tel: {number}</p>
        <button onClick={() => onDelete(id)} className="btn">Delete</button>
      </li>

  )
}

export default Contact
