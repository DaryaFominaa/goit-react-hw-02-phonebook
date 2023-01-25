import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Wrap } from './ContactForm.styled';
const initialValues = { name: '' };

// const schema = yup.object().shape({
//   name: yup.string().required,
// });
export const ContactForm = () => {
  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     const { name } = event.target.elements;
  //     console.log(name.value);
  //   };
  const nameId = nanoid();
  const numberId = nanoid();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };
  return (
    <>
      <h2>Phonebook</h2>
      <Formik
        initialValues={initialValues}
        // validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* СТИЛИ ДЛЯ ДИВ display: flex; flex-direction: column; width: 200px;
          gap: 10px px ; */}
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
