import { Contact } from '../Contact/Contact';

// import { nanoid } from 'nanoid';
export const ContactList = ({ items }) => {
  //   const contactId = nanoid();
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <Contact contact={item}></Contact>
          </li>
        ))}
      </ul>
    </>
  );
};
