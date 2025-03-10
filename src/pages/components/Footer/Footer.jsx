import Heading from "./components/Heading";
import Information from "./components/Information";

const Footer = () => {
  return (
    <div className="absolute left-0 tablet:static mt-[140px] py-[55px] tablet:px-[60px] bg-dark-gray tablet:rounded-tl-[45px] rounded-br-none tablet:rounded-tr-[45px] rounded-bl-none">
      <Heading />
      <Information />

      <div className="pt-[50px] border-t border-white flex lg:flex-row flex-col items-center lg:gap-10 gap-5 mt-[50px]">
        <p className="text-white text-sm text-center tablet:text-left tablet:text-lg">
          &copy; 2023 Positivus. All Rights Reserved.
        </p>
        <a href="#!" className="underline text-white text-sm tablet:text-lg">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
