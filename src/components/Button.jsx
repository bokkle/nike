const Button = ({ label, iconURL }) => {
  return (
    <button className="">
      {label}
      <img src={iconURL} alt="" />
    </button>
  );
};

export default Button;
