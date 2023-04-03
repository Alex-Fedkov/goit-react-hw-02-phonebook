import { 
  FindContact,
  Input
} from "./styles.jsx";

const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <FindContact>Find contacts by name</FindContact>
      <Input name="filter" value={filter} onChange={onChange} />
    </div>
  );
}

export default Filter;
