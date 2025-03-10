import Marquee from "react-fast-marquee";

const logos = [
  "/Amazon_logo.svg",
  "/Clribbble_logo.svg",
  "/HubSpot_logo.svg",
  "/Netflix_logo.svg",
  "/Notion_logo.svg",
  "/Zoom_logo.svg",
];

const Company = () => {
  return (
    <div className="flex flex-wrap justify-center laptop:justify-between gap-x-10 tablet:gap-x-20 gap-y-5 mt-[70px]">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`logo-${index}`}
          className="max-w-[100px] lg:max-w-[150px] grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
        />
      ))}
    </div>
  );
};

export default Company;
