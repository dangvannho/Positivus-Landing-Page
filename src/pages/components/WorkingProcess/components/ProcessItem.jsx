import { useState } from "react";
import IconPlus from "~/components/icons/IconPlus";
import IconMinus from "~/components/icons/IconMinus";

const ProcessItem = ({ number, title, description }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`px-4 tablet:px-[60px] py-[25px] tablet:py-[41px] ${
        toggle ? "bg-lime-green" : "bg-light-gray"
      } shadow-[0px_5px_0px_0px_#191A23] rounded-[45px]`}
    >
      <div className="tablet:pb-[30px] flex tablet:border-b tablet:border-black">
        <div className="flex flex-1 gap-[25px] items-center">
          <h3 className="text-[35px] tablet:text-[60px] font-medium">
            {number}
          </h3>
          <h2 className="text-[20px] tablet:text-[30px] font-medium">
            {title}
          </h2>
        </div>

        <div
          className={`flex items-center cursor-pointer transition-transform duration-500 ${
            toggle ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <IconMinus className="w-[35px] h-[36px] tablet:w-[58px] tablet:h-[59px]" />
          ) : (
            <IconPlus className="w-[35px] h-[36px] tablet:w-[58px] tablet:h-[59px]" />
          )}
        </div>
      </div>

      <div
        className={`overflow-hidden [transition:max-height_0.5s_ease-in-out] ${
          toggle ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <p className="pt-[30px] text-sm tablet:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ProcessItem;
