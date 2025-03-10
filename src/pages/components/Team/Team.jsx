import HighlightedTitle from "~/components/common/HighlightedTitle";
import TeamItem from "./components/TeamItem";
import Button from "~/components/common/Button";
import { useState } from "react";

const Team = () => {
  const [showAll, setShowAll] = useState(false);

  const data = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      des_exp:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Jane Doe",
      position: "Director of Operations",
      des_exp:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      des_exp:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      name: "Emily Johnson",
      position: "PPC Manager",
      des_exp:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      name: "Brian Williams",
      position: "Social Media Specialist",
      des_exp:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      name: "Sarah Kim",
      position: "Content Creator",
      des_exp:
        "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    },
    {
      name: "Sarah Kim",
      position: "Content Creator",
      des_exp:
        "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    },
    {
      name: "Sarah Kim",
      position: "Content Creator",
      des_exp:
        "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];

  const visibleItems = showAll ? data : data.slice(0, 6);

  return (
    <div className="mt-[140px]">
      <HighlightedTitle
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        className="lg:w-[473px]"
      />

      <div className="mt-[80px] grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 auto-rows-max justify-center gap-[40px]">
        {visibleItems.map((item, index) => {
          return (
            <TeamItem
              key={index}
              name={item.name}
              position={item.position}
              des_exp={item.des_exp}
            />
          );
        })}
      </div>

      <Button
        className="mt-[40px] ml-auto bg-black text-white"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show less" : "See all team"}
      </Button>
    </div>
  );
};

export default Team;
