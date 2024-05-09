import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./UserForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Мінімум 3 символи!")
    .required("Це обов'язкове поле!"),
  email: Yup.string()
    .email("Має бути у форматі пошти!")
    .required("Це обов'язкове поле!"),
  role: Yup.string()
    .oneOf(["guest", "user", "admin"])
    .required("Це обов'язкове поле!"),
  comment: Yup.string()
    .min(3, "Мінімум 3 символи!")
    .max(30, "Максимум 30 символів!"),
});

export default function UserForm({ onAdd }) {
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        role: "guest",
        comment: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-username`}>Username:</label>
          <Field
            className={css.input}
            type="text"
            name="username"
            id={`${fieldId}-username`}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-email`}>Email:</label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id={`${fieldId}-email`}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-role`}>Role:</label>
          <Field
            className={css.input}
            as="select"
            name="role"
            id={`${fieldId}-role`}
          >
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Field>
          <ErrorMessage className={css.error} name="role" component="span" />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-comment`}>Comment:</label>
          <Field
            className={css.input}
            as="textarea"
            name="comment"
            id={`${fieldId}-comment`}
          />
          <ErrorMessage className={css.error} name="comment" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
