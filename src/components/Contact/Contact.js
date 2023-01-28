import { ContactEl } from './Contact.styled';

export const Contact = ({ contact: { name, number, id } }, onDelete) => {
  return (
    <div>
      <ContactEl>
        Name: {name} - Phone: {number};
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </ContactEl>
    </div>
  );
};
