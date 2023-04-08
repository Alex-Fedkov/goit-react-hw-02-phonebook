import PropTypes from "prop-types";
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

ContactItem.prototype = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default ContactList;