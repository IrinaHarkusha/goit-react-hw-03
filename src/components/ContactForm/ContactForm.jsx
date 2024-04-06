import { Field, Form, Formik } from "formik"
import { nanoid } from 'nanoid'



function ContactForm({ addContact }) {

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (data, option) => {
    addContact({ ...data, id: nanoid() })
    option.resetForm()
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label className="label">
          Name
          <Field name="name" className="input" type="text" placeholder='Enter name...' />
        </label>
        <label className="label">
          Number
          <Field name="number" className="input" type="text" placeholder='Enter number...' />
        </label>
        <button type="submit" className="btn">Add contact</button>
      </Form>
    </Formik>
  )
}



export default ContactForm


// поля повинні бути обов'язковими для заповнення
// мінімальна кількість символів - 3
// максимальна кількість символів - 50
// Після завершення цього кроку застосунок повинен виглядати приблизно так.