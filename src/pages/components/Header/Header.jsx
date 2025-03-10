import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Button from "~/components/common/Button";
import Navbar from "./components/Navbar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="relative mt-8 lg:mt-[60px] flex items-center justify-between">
      <a href="">
        <img
          src="/Logo_Dark.svg"
          alt=""
          className="w-[150px] tablet:w-auto tablet:h-auto"
        />
      </a>
      <Navbar toggle={toggle} />
      <Button className="hover:bg-dark-gray hover:text-white hidden lg:block lg:text-sm laptop:text-xl">
        Request a quote
      </Button>

      {/* Moblie */}
      <MdOutlineMenu
        className="block lg:hidden cursor-pointer w-[30px] h-[30px] tablet:w-[45px] tablet:h-[45px]"
        onClick={() => setToggle(!toggle)}
      />
    </header>
  );
};

export default Header;
