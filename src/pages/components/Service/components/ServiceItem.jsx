import IconCircleArrow from "~/components/icons/IconCircleArrow";

const ServiceItem = ({
  background,
  title1,
  title2,
  bgTitle,
  bgCircle,
  fill,
  colorLearn,
  image,
}) => {
  return (
    <div
      className={`${background} p-[50px] rounded-[45px] border border-dark-gray shadow-[0px_5px_0px_0px_#191A23] relative tablet:static`}
    >
      <div className="flex items-center gap-20">
        {/* Infomation service */}
        <div className="flex-1">
          <h4
            className={`text-[25px] tabel:text-[30px] font-medium ${bgTitle} w-max px-1 rounded-[7px]`}
          >
            {title1}
          </h4>
          <h4
            className={`text-[25px] tabel:text-[30px] font-medium ${bgTitle} w-max px-1 rounded-[7px]`}
          >
            {title2}
          </h4>

          <div className="mt-[93px] flex items-center gap-[15px]">
            <IconCircleArrow bgCircle={bgCircle} fill={fill} />
            <span className={`text-xl ${colorLearn} hidden md:block`}>
              Learn more
            </span>
          </div>
        </div>

        {/* Image service */}
        <div className="absolute right-10 bottom-10 tablet:flex-1 tablet:static">
          <img
            src={image}
            alt=""
            className="w-[130px] tablet:w-auto tablet:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
