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

  addContact = (name, number) => {
    console.log(name, number);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number }],
    }));
  };

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
        <ContactForm onSubmit={this.addContact}></ContactForm>
        {/* <ContactList>{this.state.contacts} </ContactList> */}
        {/* <ContactList contacts={this.state.contacts}></ContactList> */}
      </>
    );
  }
}
