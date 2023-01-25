import { Contact } from '../Contact/Contact';

import { nanoid } from 'nanoid';
export const ContactList = ({ contacts }) => {
  const contactId = nanoid();
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ contact }) => (
          <Contact key={contactId} contact={contact}></Contact>
        ))}
      </ul>
    </>
  );
};
