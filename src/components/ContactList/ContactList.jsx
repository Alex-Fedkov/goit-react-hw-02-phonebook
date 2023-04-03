import ContactItem from "components/ContactItem/ContactItem";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem name={name} number={number} key={id} onDelete={() => onDelete(id)} />
        )
      })}
    </ul>
  )
}

export default ContactList;