import { Link } from "react-router";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

type SideBarProps = {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({ sideBar, setSideBar }: SideBarProps) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const handleClosingBar = (): void => {
    setSideBar(false);
    setDropdown(false);
  };

  return (
    <nav
      className={`h-screen z-[99]  fixed left-0 top-0 w-screen  text-white ${
        sideBar ? "translate-x-0 " : "-translate-x-full"
      } transition-transform duration-700`}
    >
      <div className="sm:w-[17rem] w-[15rem] bg-black relative h-screen  pt-16 z-50">
        <div className=" absolute right-3 top-4 cursor-pointer">
          <X
            className="size-5 cursor-pointer z-50 "
            onClick={handleClosingBar}
          />
        </div>
        <ul className="flex gap-2.5 flex-col ">
          <Link to="/">
            {" "}
            <li
              className="font-bold h-full w-full hover:text-amber-400 px-7 border-b-[1px] border-b-gray-500/30 pb-2"
              onClick={handleClosingBar}
            >
              Home
            </li>
          </Link>
          <li
            className="font-bold h-full w-full hover:text-amber-400 px-7 border-b-[1px] border-b-gray-500/30 pb-2"
            onClick={handleClosingBar}
          >
            Menu
          </li>
          <Link to="/about">
            {" "}
            <li
              className="font-bold h-full w-full hover:text-amber-400 px-7 border-b-[1px] border-b-gray-500/30 pb-2"
              onClick={handleClosingBar}
            >
              About
            </li>
          </Link>
          <li
            className="font-bold h-full w-full hover:text-amber-400 px-7 border-b-[1px] border-b-gray-500/30 pb-2"
            onClick={handleClosingBar}
          >
            Shop
          </li>
          <li
            className="font-bold h-full w-full hover:text-amber-400 px-7 border-b-[1px] border-b-gray-500/30 pb-2"
            onClick={handleClosingBar}
          >
            Blog
          </li>
          <li className="font-bold  w-full  px-7 border-b-[1px] border-b-gray-500/30 ">
            <div className=" flex justify-between items-center h-fit">
              {" "}
              <span className="hover:text-amber-500"> Page</span>{" "}
              <ChevronDown
                className={`hover:text-amber-500 cursor-pointer size-5 transition-transform duration-1000 ${
                  dropdown ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => setDropdown(!dropdown)}
              />{" "}
            </div>
            <ul
              className={`flex flex-col transition-all ease-in-out duration-1000 overflow-hidden ${
                dropdown ? "max-h-64" : "max-h-0"
              }`}
            >
              <Link to="faqs">
                {" "}
                <li
                  className="border-b-[1px] pt-3 border-b-gray-500/30 px-3 pb-2 font-bold h-full w-full hover:text-amber-400"
                  onClick={handleClosingBar}
                >
                  Faqs
                </li>{" "}
              </Link>
              <Link to="our-teams">
                {" "}
                <li
                  className="border-b-[1px] border-b-gray-500/30 px-3 pb-2 font-bold h-full w-full hover:text-amber-400"
                  onClick={handleClosingBar}
                >
                  Our Teams{" "}
                </li>{" "}
              </Link>
             <Link to="our-history"> <li
                className=" px-3 font-bold h-full w-full hover:text-amber-400"
                onClick={handleClosingBar}
              >
                Our History
              </li></Link>
            </ul>
          </li>
          <Link to="contact-us">
            {" "}
            <li
              className="font-bold h-full w-full hover:text-amber-400 px-7"
              onClick={handleClosingBar}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div
        className=" fixed right-0 top-0 z-10 w-full h-screen"
        onClick={() => {
          setSideBar(false);
          setDropdown(false);
        }}
      ></div>
    </nav>
  );
};

export default SideBar;
