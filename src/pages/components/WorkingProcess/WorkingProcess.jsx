import HighlightedTitle from "~/components/common/HighlightedTitle";
import ProcessItem from "./components/ProcessItem";

const WorkingProcess = () => {
  const data = [
    {
      id: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "02",
      title: "Research and Strategy Development",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "03",
      title: "Implementation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "04",
      title: "Monitoring and Optimization",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "05",
      title: "Reporting and Communication",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "06",
      title: "Continual Improvement",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];
  return (
    <div className="mt-[140px]">
      <HighlightedTitle
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
        className="lg:w-[292px]"
      />

      <div className="mt-[80px] flex flex-col gap-[30px]">
        {data.map((item, index) => {
          return (
            <ProcessItem
              key={index}
              number={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkingProcess;
