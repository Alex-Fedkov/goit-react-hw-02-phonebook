import { 
  Item,
  List,
  Click
} from "./styles.jsx";

const ContactItem = ({ name, number, onDelete}) => {
  return (
    <li>
    <Item>
      <List>{name}:</List>
      <List>{number}</List>
      <Click onClick={onDelete}>delete</Click>
    </Item>
    </li>
    
  )
}

export default ContactItem;