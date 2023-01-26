export const Contact = ({ item: { name, number } }) => {
  return (
    <>
      <p>
        Name: {name} Phone:{number}
      </p>
    </>
  );
};
