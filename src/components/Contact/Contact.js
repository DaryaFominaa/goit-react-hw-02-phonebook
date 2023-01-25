export const Contact = ({ item, name, number }) => {
  return (
    <>
      <p item={item}>
        Name: {name} Phone:{number}
      </p>
    </>
  );
};
