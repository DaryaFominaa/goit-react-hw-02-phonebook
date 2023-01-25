import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Wrap } from './ContactForm.styled';
import * as yup from 'yup';

const initialValues = { name: '', number: '' };

const schema = yup.object().shape({
  name: yup.string().required('Please enter name'),
  number: yup.string(),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    onSubmit(name.value, number.value);
  };
  const nameId = nanoid();
  const numberId = nanoid();

  // const handleSubmit = (values, { resetForm }) => {
  //   console.log(values);

  //   resetForm();
  // };
  return (
    <>
      <h2>Phonebook</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Wrap>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              name="name"
              id={nameId}
              // value={this.state.name}
              // onChange={this.handleNameChange}
              // id={this.nameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Wrap>
          <ErrorMessage name="name"> </ErrorMessage>
          <Wrap>
            <label htmlFor="number">Number</label>
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={numberId}
            />
          </Wrap>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};
