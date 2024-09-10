import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa6";
import { RiEdit2Line } from "react-icons/ri";
import { deleteContact, editContact } from "../../redux/contacts/operations.js";
import css from "./Contact.module.css";
import ModalWindow from "../Modal/ModalWindow.jsx";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onClick = () => {
    setModalIsOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully🎉");
      });
    setModalIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const onEditClick = () => {
    dispatch(editContact({ id, name, number }));
  };
  return (
    <div className={css.profile}>
      <ul>
        <li className={css.info}>
          <FaUser />
          &nbsp;&nbsp;{name}
        </li>
        <li className={css.info}>
          <FaPhone />
          &nbsp;&nbsp;{number}
        </li>
      </ul>
      <div className={css.buttons}>
        <button className={css.editButton} type="button" onClick={onEditClick}>
          <RiEdit2Line size={20} />
        </button>
        <button className={css.deleteBtn} type="button" onClick={onClick}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <ModalWindow
          closeModal={closeModal}
          onConfirm={confirmDelete}
          modalIsOpen={modalIsOpen}
        />
      )}
    </div>
  );
};

export default Contact;
