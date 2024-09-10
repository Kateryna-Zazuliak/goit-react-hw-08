import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.phoneBook}>
      {filteredContacts?.length === 0 && <p>Contacts list is empty.</p>}
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
    </div>
  );
};

export default ContactList;
