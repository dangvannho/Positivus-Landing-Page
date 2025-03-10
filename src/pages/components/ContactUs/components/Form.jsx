import Button from "~/components/common/Button";

const Form = () => {
  return (
    <form className="flex-1">
      {/* radio */}
      <div className="flex justify-between tablet:justify-start gap-4">
        <div className="flex gap-2">
          <input
            type="radio"
            name="contact_type"
            value="say_hi"
            defaultChecked
            className="appearance-none w-[20px] h-[20px] tablet:w-[28px] tablet:h-[28px] cursor-pointer border-2 border-black rounded-full checked:bg-lime-green ring-2 ring-white ring-inset"
          />
          <label htmlFor="" className="tablet:text-lg">
            Say Hi
          </label>
        </div>

        <div className="flex gap-2">
          <input
            type="radio"
            name="contact_type"
            value="get_quote"
            className="appearance-none w-[20px] h-[20px] tablet:w-[28px] tablet:h-[28px] cursor-pointer border-2 border-black rounded-full checked:bg-lime-green ring-2 ring-white ring-inset"
          />
          <label htmlFor="" className="tablet:text-lg">
            Get a Quote
          </label>
        </div>
      </div>

      {/* name */}
      <div className="flex flex-col mt-[40px]">
        <label htmlFor="" className="mb-1">
          Name
        </label>
        <input
          type="text"
          className="w-full px-[30px] py-[18px] placeholder:text-spanish-gray rounded-[14px] border border-black"
          placeholder="Name"
        />
      </div>

      {/* email */}
      <div className="flex flex-col mt-[25px]">
        <label htmlFor="" className="mb-1">
          Email*
        </label>
        <input
          type="text"
          className="w-full px-[30px] py-[18px] placeholder:text-spanish-gray rounded-[14px] border border-black"
          placeholder="Email"
        />
      </div>

      {/* message */}
      <div className="flex flex-col mt-[25px]">
        <label htmlFor="" className="mb-1">
          Message*
        </label>
        <textarea
          className="w-full h-[190px] resize-none px-[30px] py-[18px] rounded-[14px] border border-black placeholder:text-spanish-gray"
          placeholder="Message"
        ></textarea>
      </div>

      <Button className="w-full bg-dark-gray text-white mt-[40px]">
        Send Message
      </Button>
    </form>
  );
};

export default Form;
