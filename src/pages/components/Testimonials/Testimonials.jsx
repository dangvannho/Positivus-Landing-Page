import { useState } from "react";
import HighlightedTitle from "~/components/common/HighlightedTitle";
import FeedbackItem from "./components/FeedbackItem";
import IconStar from "~/components/icons/IconStar";
import IconArrowLeft from "~/components/icons/IconArrowLeft";
import IconArrowRight from "~/components/icons/IconArrowRight";

const data = [
  {
    id: 1,
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    feedback:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    id: 2,
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    feedback:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    id: 3,
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    feedback:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === data.length - 1 ? data.length - 1 : prev + 1
    );
  };

  const handleClickDot = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-[100px]">
      <HighlightedTitle
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        className="lg:w-[473px]"
      />

      <div className="flex flex-col items-center mt-[85px] tablet:px-[20px] lg:px-0 py-[68px] rounded-[45px] bg-dark-gray overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out w-[300px] tablet:w-full lg:w-[606px] overflow-visible gap-8"
          style={{ transform: `translateX(-${currentSlide * 105}%)` }}
        >
          {data.map((item) => {
            return (
              <FeedbackItem
                key={item.id}
                name={item.name}
                position={item.position}
                feedback={item.feedback}
              />
            );
          })}
        </div>

        <div className="flex mt-[124px] justify-center items-center gap-10 tablet:gap-20">
          <div
            className={`${
              currentSlide === 0 ? "cursor-not-allowed" : "cursor-pointer"
            } w-[15px] h-[15px] tablet:w-[20px] tablet:h-[20px]`}
            onClick={handlePrevSlide}
          >
            <IconArrowLeft opacity={currentSlide === 0 ? 0.3 : 1} />
          </div>
          <div className="flex gap-10">
            {data.map((_, index) => (
              <div
                key={index}
                className="cursor-pointer w-[10px] h-[10px] tablet:w-[14px] tablet:h-[14px]"
                onClick={() => handleClickDot(index)}
              >
                <IconStar fill={currentSlide === index ? "#B9FF66" : "white"} />
              </div>
            ))}
          </div>
          <div
            className={`${
              currentSlide >= data.length - 1
                ? "cursor-not-allowed"
                : "cursor-pointer"
            } w-[15px] h-[15px] tablet:w-[20px] tablet:h-[20px]`}
            onClick={handleNextSlide}
          >
            <IconArrowRight
              opacity={currentSlide >= data.length - 1 ? 0.3 : 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
