import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "../RegistrationPage/RegistrationPage.module.css";
import { selectAuthError } from "../../redux/auth/selectors.js";
import { toastStyles } from "../../services/toast.js";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const RegistrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  password: Yup.string()
    .required("Required")
    .min(8, "Too short!")
    .max(50, "Too long!"),
  email: Yup.string().required("Required").email("Invalid email!"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const handleSubmit = (values, actions) => {
    const contactObject = {
      ...values,
    };
    dispatch(register(contactObject));
    if (error) {
      toast(
        `Please check the correctness of the entered email and password...${error}`,
        toastStyles
      );
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label className={css.label} htmlFor="name">
              User name
            </label>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Ivan"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={css.errorText}
            />
          </div>
          <div className={css.fieldWrapper}>
            <label className={css.label} htmlFor="email">
              User email
            </label>
            <Field
              className={css.input}
              type="text"
              name="email"
              placeholder="example@gmail.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={css.errorText}
            />
          </div>
          <div className={css.fieldWrapper}>
            <label className={css.label} htmlFor="password">
              User password
            </label>
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="Please enter password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.errorText}
            />
          </div>
          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default RegistrationPage;
