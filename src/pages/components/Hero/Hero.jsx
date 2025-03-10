import Button from "~/components/common/Button";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-max mt-[35px] lg:mt-[70px]">
      {/* hero infomation */}
      <div className="col-[1_/_2]">
        <h1 className="lg:w-[531px] desktop:w-full text-3xl tablet:text-[60px] leading-normal font-medium text-center lg:text-left laptop:justify-self-start">
          Navigating the digital landscape for success
        </h1>
      </div>

      {/* hero image */}
      <div className="lg:row-[1_/_3] lg:col-[2_/_3] justify-self-center lg:justify-self-end">
        <img src="/Illustration.svg" alt="" />
      </div>

      <div className="mt-[35px] laptop:mt-0 justify-self-center lg:justify-self-start">
        <p className="w-[360px] tablet:w-[498px] laptop:w-[550px] tablet:text-xl font-normal">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button className="bg-dark-gray text-white mt-[35px] w-full lg:w-max">
          Book a consultation
        </Button>
      </div>
    </div>
  );
};

export default Hero;
