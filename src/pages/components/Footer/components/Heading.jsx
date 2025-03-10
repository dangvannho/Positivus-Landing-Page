import FooterNav from "./FooterNav";
import SocialMedia from "./SocialMedia";

const Heading = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center">
      <img
        src="/Logo_Light.svg"
        alt=""
        className="w-[150px] tablet:w-[280px] lg:w-auto lg:h-auto"
      />
      <FooterNav />
      <div className="lg:block hidden">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Heading;
