import { Contact } from '../Contact/Contact';

// import { nanoid } from 'nanoid';
export const ContactList = ({ contacts }) => {
  //   const contactId = nanoid();
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, id }) => (
          <Contact key={id} contact={name}></Contact>
        ))}
      </ul>
    </>
  );
};
