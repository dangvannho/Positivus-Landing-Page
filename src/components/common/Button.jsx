const Button = ({ children, className = "", onClick }) => {
  return (
    <button
      className={`px-[35px] py-[20px] flex justify-center items-center border border-black rounded-[14px] text-sm tablet:text-xl font-normal ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
