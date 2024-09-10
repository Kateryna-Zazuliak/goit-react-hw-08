import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList.jsx";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/contacts/selectors.js";
import { useEffect } from "react";
import { addContact, fetchContacts } from "../redux/contacts/operations.js";
import toast from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success("Contacts loaded successfully🎉");
      });
  }, [dispatch]);

  const onAddContact = (contact) => {
    dispatch(addContact(contact))
      .unwrap()
      .then(() => {
        toast.success("Contacts added successfully");
      });
  };
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
