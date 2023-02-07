const Input = ({ handleChild }) => {
  const func = () => {
    console.log("child function");
  };

  return (
    <input type='text' onClick={() => handleChild(func)} />
  );
};
export default Input;