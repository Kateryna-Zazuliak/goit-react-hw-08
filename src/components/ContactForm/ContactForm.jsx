import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};
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

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.name,
      number: values.number,
    };
    onAddContact(contactObject);
    actions.resetForm();
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
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
