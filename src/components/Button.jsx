const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`font-montserrat flex items-center justify-center
    gap-2 rounded-full border px-7 py-4 text-lg
    leading-none ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : 'bg-coral-red border-coral-red text-white'
    }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          className="ml-2 h-5 w-5 rounded-full"
          alt="arrow right icon"
        />
      )}
    </button>
  );
};

export default Button;
