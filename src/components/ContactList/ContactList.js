import { Contact } from '../Contact/Contact';

export const ContactList = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item, id) => (
          <li key={id}>
            <Contact contact={item}></Contact>
          </li>
        ))}
      </ul>
    </>
  );
};
