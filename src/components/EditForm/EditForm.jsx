import { RiSaveLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import css from "./EditForm.module.css";
import { useDispatch } from "react-redux";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import { editContact } from "../../redux/contacts/operations";
import { setCurrentContact } from "../../redux/contacts/slice";

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

export const EditForm = () => {
  const dispatch = useDispatch();
  const currentContact = useSelector(selectCurrentContact);
  const initialValues = {
    name: currentContact?.name || "",
    number: currentContact?.number || "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(editContact({ ...values, id: currentContact.id }));
    dispatch(setCurrentContact(null));
    actions.resetForm();
  };
  const handleCancel = () => {
    dispatch(setCurrentContact(null));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
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
            <RiSaveLine color="green" size="16px" />
          </button>
          <button
            className={css.editButton}
            type="button"
            onClick={handleCancel}
          >
            <MdOutlineCancel color="red" size="16px" />
          </button>
        </Form>
      )}
    </Formik>
  );
};
