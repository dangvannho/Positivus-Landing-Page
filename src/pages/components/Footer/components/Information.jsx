import Button from "~/components/common/Button";
import SocialMedia from "./SocialMedia";

const Information = () => {
  return (
    <div className="mt-[66px] flex lg:flex-row flex-col lg:gap-0 gap-8">
      {/* infomation */}
      <div className="flex-1 pr-0 lg:pr-[154px] flex lg:block flex-col items-center">
        <h4 className="tex-xl font-medium px-1 bg-lime-green rounded-[7px] w-max">
          Contact us:
        </h4>

        <div className="mt-[27px] text-white text-lg text-center lg:text-left">
          <p>Email: info@positivus.com</p>
          <p className="my-[20px]">Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
      </div>

      {/* form */}
      <form className="flex-1 flex lg:flex-row flex-col px-[40px] py-[58px] gap-[20px] bg-dark-gunmetal rounded-[14px]">
        <input
          type="text"
          className="flex-1 px-[35px] py-[22px] rounded-[14px] text-white border border-white bg-dark-gunmetal focus:outline-none"
          placeholder="Email"
        />
        <Button className="flex-1 bg-lime-green">Subscribe to news</Button>
      </form>

      <div className="lg:hidden block overflow-hidden mx-auto">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Information;
