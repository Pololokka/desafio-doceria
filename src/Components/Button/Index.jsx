const Button = ({ title, handleClick }) => {
  return (
    <input
      type="button"
      value={title}
      className="texto btn__geral"
      onClick={handleClick}
    />
  );
};

export default Button;
