import { Formik, Field, Form, ErrorMessage } from 'formik';
// import { nanoid } from 'nanoid';
import { Wrap } from './ContactForm.styled';
import * as yup from 'yup';

const initialValues = { name: '', number: '' };

const schema = yup.object().shape({
  name: yup.string().required('Please enter name'),
  number: yup.string(),
});

export const ContactForm = ({ onSubmit }) => {
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const { name, number } = event.target.elements;
  //   onSubmit(name.value, number.value);
  // };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    // console.log(values);
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              name="name"
              placeholder="Tom Smith"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <ErrorMessage name="name"> </ErrorMessage>
          <div>
            <label htmlFor="number">Number</label>
            <Field
              type="tel"
              name="number"
              placeholder="+380"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};
