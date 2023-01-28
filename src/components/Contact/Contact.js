export const Contact = ({ contact: { name, number } }) => {
  return (
    <>
      <p>
        Name: {name} Phone:{number}
      </p>
    </>
  );
};
