import { IconIns2 } from "~/components/icons/IconIns";
import IconFb from "~/components/icons/IconFb";
import IconTw from "~/components/icons/IconTw";

const SocialMedia = () => {
  return (
    <div className="flex gap-[20px]">
      <IconIns2 />
      <IconFb color="white" />
      <IconTw />
    </div>
  );
};

export default SocialMedia;
