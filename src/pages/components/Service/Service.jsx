import HighlightedTitle from "~/components/common/HighlightedTitle";
import ServiceItem from "./components/ServiceItem";
import ActionBanner from "./components/ActionBanner";
import SEO_image from "~/assets/SEO_image.svg";
import Ads_image from "~/assets/Ads_image.svg";
import SocialMM_image from "~/assets/SocialMM_image.svg";
import EmailMaketing_image from "~/assets/EmailMaketing_image.svg";
import ContentCreate_image from "~/assets/ContentCreation_image.svg";
import Analytics_image from "~/assets/Analytics_image.svg";

const Service = () => {
  const services = [
    {
      background: "bg-light-gray",
      title1: "Search engine",
      title2: "optimization",
      bgTitle: "bg-lime-green",
      bgCircle: "#191A23",
      fill: "#B9FF66",
      colorLearn: "text-black",
      image: SEO_image,
    },
    {
      background: "bg-lime-green",
      title1: "Pay-per-click",
      title2: "advertising",
      bgTitle: "bg-white",
      bgCircle: "#191A23",
      fill: "#B9FF66",
      colorLearn: "text-black",
      image: Ads_image,
    },
    {
      background: "bg-black",
      title1: "Social Media",
      title2: "Marketing",
      bgTitle: "bg-white",
      bgCircle: "#ffffff",
      fill: "#000000",
      colorLearn: "text-white",
      image: SocialMM_image,
    },
    {
      background: "bg-light-gray",
      title1: "Email",
      title2: "Marketing",
      bgTitle: "bg-lime-green",
      bgCircle: "#191A23",
      fill: "#B9FF66",
      colorLearn: "text-black",
      image: EmailMaketing_image,
    },
    {
      background: "bg-lime-green",
      title1: "Content",
      title2: "Creation",
      bgTitle: "bg-white",
      bgCircle: "#191A23",
      fill: "#B9FF66",
      colorLearn: "text-black",
      image: ContentCreate_image,
    },
    {
      background: "bg-dark-gray",
      title1: "Analytics and",
      title2: "Tracking",
      bgTitle: "bg-lime-green",
      bgCircle: "#ffffff",
      fill: "#191A23",
      colorLearn: "text-white",
      image: Analytics_image,
    },
  ];
  return (
    <div className="mt-[140px]">
      <HighlightedTitle
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        className="lg:w-[580px]"
      />

      <div className="mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-10">
        {services.map((item, index) => {
          return (
            <ServiceItem
              key={index}
              background={item.background}
              title1={item.title1}
              title2={item.title2}
              bgTitle={item.bgTitle}
              bgCircle={item.bgCircle}
              fill={item.fill}
              colorLearn={item.colorLearn}
              image={item.image}
            />
          );
        })}
      </div>

      <ActionBanner />
    </div>
  );
};

export default Service;
