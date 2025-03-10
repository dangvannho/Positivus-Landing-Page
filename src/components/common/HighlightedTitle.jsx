const HighlightedTitle = ({ title, description, className = "" }) => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-start gap-10">
      <h3 className="text-[30px] tablet:text-[40px] font-medium bg-lime-green rounded-[7px] px-1">
        {title}
      </h3>
      <p
        className={`w-[350px] tablet:w-[450px] text-center ${className} lg:text-left text-[13px] tablet:text-lg font-normal`}
      >
        {description}
      </p>
    </div>
  );
};

export default HighlightedTitle;
