import HighlightedTitle from "~/components/common/HighlightedTitle";
import Form from "./components/Form";
import SpikyStar_image from "~/assets/SpikyStar_image.svg";

const ContactUs = () => {
  return (
    <div className="mt-[140px]">
      <HighlightedTitle
        title="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        className="laptop:w-[323px]"
      />

      <div className="px-5 tablet:px-[100px] pt-[60px] pb-[80px] mt-[85px] rounded-[45px] flex bg-light-gray relative overflow-hidden">
        <Form />
        <div className="hidden laptop:block laptop:flex-1">
          <img
            src={SpikyStar_image}
            alt=""
            className="absolute right-[-320px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
