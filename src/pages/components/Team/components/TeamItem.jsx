import { IconIns1 } from "~/components/icons/IconIns";
import Avatar1 from "~/assets/Avatar1.svg";

const TeamItem = ({ name, position, des_exp }) => {
  return (
    <div className="flex flex-col px-[35px] py-[40px] rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] border border-black">
      <div className="pb-[28px] border-b border-black flex-1 flex justify-between">
        <div className="flex gap-6 items-end">
          <img
            src={Avatar1}
            alt=""
            className="w-[120px] h-[120px] object-cover"
          />

          <div>
            <h4 className="text-xl font-medium">{name}</h4>
            <span className="text-lg">{position}</span>
          </div>
        </div>
        <IconIns1 />
      </div>
      <p className="flex-1 pt-[28px] text-lg ">{des_exp}</p>
    </div>
  );
};

export default TeamItem;
