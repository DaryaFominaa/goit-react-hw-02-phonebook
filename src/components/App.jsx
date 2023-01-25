// import { Formik, Field, Form } from 'formik';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
// import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: ['Anna', 'Mango', 'Tom'],
    name: '',
    number: '',
  };

  nameId = nanoid();

  // handleNameChange = event => {
  //   const { name, value } = event.currentTarget;

  //   this.setState({ [name]: value });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { name } = event.target.elements;
  //   console.log(name.value);
  // };

  render() {
    return (
      <>
        <ContactForm></ContactForm>
        <ContactList contact={this.state.contacts}></ContactList>
        {/* <ContactList contacts={this.state.contacts}></ContactList> */}

        {/* <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
              id={this.nameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form> */}

        {/* <Formik>
          <Form>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              name="name"
              value={this.state.name}
              onInputChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <button type="submit">Add contact</button>
          </Form>
        </Formik> */}
      </>
    );
  }
}
