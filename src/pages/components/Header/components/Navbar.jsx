import { useEffect, useRef } from "react";

const Navbar = ({ toggle, setToggle }) => {
  const navRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setToggle]);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  return (
    <>
      <nav className="hidden lg:flex text-sm laptop:text-xl gap-10 ml-auto mr-10 ">
        <a href="#!" className="p-1 rounded-md hover:bg-lime-green font-normal">
          About us
        </a>
        <a href="#!" className="p-1 rounded-md hover:bg-lime-green font-normal">
          Services
        </a>
        <a href="#!" className="p-1 rounded-md hover:bg-lime-green font-normal">
          Use Cases
        </a>
        <a href="#!" className="p-1 rounded-md hover:bg-lime-green font-normal">
          Pricing
        </a>
        <a href="#!" className="p-1 rounded-md hover:bg-lime-green font-normal">
          Blog
        </a>
      </nav>

      {/* Mobile Navbar */}
      {toggle && (
        <nav
          ref={navRef}
          className="absolute top-full w-full flex flex-col text-sm tablet:text-2xl text-center gap-5 bg-white py-5"
        >
          <a href="#!" className="p-1 hover:bg-lime-green font-normal">
            About us
          </a>
          <a href="#!" className="p-1 hover:bg-lime-green font-normal">
            Services
          </a>
          <a href="#!" className="p-1 hover:bg-lime-green font-normal">
            Use Cases
          </a>
          <a href="#!" className="p-1 hover:bg-lime-green font-normal">
            Pricing
          </a>
          <a href="#!" className="p-1 hover:bg-lime-green font-normal">
            Blog
          </a>
        </nav>
      )}
    </>
  );
};

export default Navbar;
