import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

function ContactForm({ addContact }) {
  const addSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'The name must be more than 3')
      .max(50, 'Name must be less than 50')
      .required('Required'),
    number: Yup.number()
      .min(100)
      .required('Required'),
  })

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (data, option) => {
    addContact({ ...data, id: nanoid() });
    option.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addSchema}
    >
      <Form className={s.form}>
        <label>
          Name
          <Field
            name="name"
            className={s.input}
            type="text"
            placeholder="Enter name..."
          />
          <ErrorMessage component="span" className={s.red} name="name" />
        </label>
        <label>
          Number
          <Field
            name="number"
            className={s.input}
            type="text"
            placeholder="Enter number..."
          />
          <ErrorMessage component="span" className={s.red} name="number" />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  )
}

export default ContactForm;

