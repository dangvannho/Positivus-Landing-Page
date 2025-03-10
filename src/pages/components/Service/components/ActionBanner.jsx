import Button from "~/components/common/Button";
import Reaction_image from "~/assets/Reaction_image.svg";
const ActionBanner = () => {
  return (
    <div className="mt-[123px] p-[60px] rounded-[45px] bg-light-gray relative">
      <div className="w-full tablet:w-[500px]">
        <h4 className="text-[25px] tablet:text-[30px] font-medium">
          Let’s make things happen
        </h4>
        <p className="my-[26px] tablet:text-lg">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button className="w-full tablet:w-max bg-dark-gray text-white">
          Get your free proposal
        </Button>
      </div>

      <img
        src={Reaction_image}
        alt=""
        className="absolute lg:right-[0px] laptop:right-[75px] top-[-18px] hidden lg:block"
      />
    </div>
  );
};

export default ActionBanner;
