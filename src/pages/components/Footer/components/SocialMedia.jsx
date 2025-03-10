import { IconIns2 } from "~/components/icons/IconIns";
import IconFb from "~/components/icons/IconFb";
import IconTw from "~/components/icons/IconTw";

const SocialMedia = () => {
  return (
    <div className="flex gap-[20px]">
      <a href="#!">
        <IconIns2 />
      </a>
      <a href="#!">
        <IconFb color="white" />
      </a>
      <a href="#!">
        <IconTw />
      </a>
    </div>
  );
};

export default SocialMedia;
