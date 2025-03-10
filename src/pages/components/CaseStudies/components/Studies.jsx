import IconArrow from "~/components/icons/IconArrow";

const Studies = () => {
  const data = [
    {
      description:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      description:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      description:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  return (
    <div className="mt-[50px] lg:mt-[85px] flex gap-4 overflow-auto scrollbar-hide lg:gap-0 lg:bg-dark-gray lg:rounded-[45px] lg:py-[70px]">
      {data.map((item, index) => {
        const lastItem = index;
        let check = false;
        if (lastItem === data.length - 1) {
          check = true;
        }
        return (
          <div
            className={`flex-none w-[351px] tablet:w-[500px] lg:flex-1 px-[64px] py-[70px] lg:py-0 bg-dark-gray rounded-[45px] lg:rounded-none ${
              check ? "" : "lg:border-r-[2px]"
            } border-white`}
            key={index}
          >
            <p className="text-white text-[16px] tablet:text-lg">
              {item.description}
            </p>
            <div className="flex items-center gap-5 mt-5">
              <a
                href="#!"
                className="text-lg tablet:text-xl text-lime-green hover:underline"
              >
                Learn more
              </a>
              <IconArrow className="w-[15px] h-[15px] tablet:w-[20px] tablet:h-[21px]" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Studies;
