const FeedbackItem = ({ name, position, feedback }) => {
  return (
    <div className="flex flex-shrink-0 flex-col w-full">
      <div className="relative">
        {/* Content */}
        <div className="relative p-[30px] tablet:p-[60px] bg-dark-gray rounded-[45px] border border-lime-green ">
          <p className="text-sm tablet:text-lg text-white">{feedback}</p>
        </div>

        {/* Bottom arrow */}
        <div className="absolute bottom-[-11px] left-[60px] w-6 h-6 bg-dark-gray border-l border-b border-lime-green rotate-[-45deg]"></div>
      </div>

      {/* Author info */}
      <div className="mt-[30px] ml-[60px]">
        <h3 className="text-lg tablet:text-xl font-medium text-lime-green">
          {name}
        </h3>
        <p className="text-sm tablet:text-lg text-white">{position}</p>
      </div>
    </div>
  );
};

export default FeedbackItem;
