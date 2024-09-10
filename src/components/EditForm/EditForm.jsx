import { RiSaveLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import css from "./EditForm.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { setCurrentContact } from "../../redux/contacts/slice";
import toast from "react-hot-toast";

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .matches(phoneRegExp, "Format must be 'xxx-xx-xx'")
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

export const EditForm = ({ setEdit, currentContact }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: currentContact?.name || "",
    number: currentContact?.number || "",
  };
  const handleSubmit = (values, actions) => {
    const contactId = currentContact?.id;
    dispatch(editContact({ id: contactId, contact: { ...values } }))
      .unwrap()
      .then(() => {
        dispatch(setCurrentContact(null));
        actions.resetForm();
        toast.success("Contact updated successfully🎉");
        setEdit(false);
      })
      .catch((error) => {
        console.log("Error updating contact:", error);
      });
  };
  const handleCancel = () => {
    dispatch(setCurrentContact(null));
    setEdit(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
      enableReinitialize
    >
      {({ errors }) => (
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className={css.errorText}
            />
          </div>
          <div className={css.fieldWrapper}>
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <Field className={css.input} type="tel" name="number" />
            <ErrorMessage
              name="number"
              component="div"
              className={css.errorText}
            />
          </div>
          <button
            className={css.submitButton}
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >
            <RiSaveLine color="green" size="36px" />
          </button>
          <button
            className={css.editButton}
            type="button"
            onClick={handleCancel}
          >
            <MdOutlineCancel color="red" size="36px" />
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default EditForm;
