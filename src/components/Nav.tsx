import { Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

type HeaderProps={
  components:boolean
}

const Nav = ({components}:HeaderProps) => {
  const [page, setPage] = useState(false);

  return (
    <nav className={`bg-green-600 px-7  items-center  py-2  hidden text-white sticky top-0 z-50 ${components ? "lg:flex": "hidden"}`}>
      <div className="flex w-1/2 gap-8 font-extrabold">
        <Link to="/">
          <h6 className="hover:text-amber-400 cursor-pointer">Home</h6>
        </Link>
        <h6 className="hover:text-amber-400 cursor-pointer">Menu</h6>
        <Link to="about">
          <h6 className="hover:text-amber-400 cursor-pointer">About</h6>
        </Link>
        <h6 className="hover:text-amber-400 cursor-pointer">Shop</h6>
        <h6 className="hover:text-amber-400 cursor-pointer">Blog</h6>
        <div
          className="relative size-11 z-40"
          onMouseEnter={() => setPage(true)}
          onMouseLeave={() => setPage(false)}
        >
          {page && (
            <div
              className="absolute top-12 flex pt-4 text-black  rounded-md z-50 bg-white"
              onMouseLeave={() => setPage(false)}
            >
              <ul>
              <Link to="faqs">  <li className=" pl-5 hover:bg-black/10 py-1 hover:text-amber-400 w-44">
                  Faq
                </li></Link>
                <Link to="our-teams"> <li className=" pl-5 hover:bg-black/10 py-1 hover:text-amber-400 w-full">
                  Our Teams
                </li></Link>
                <Link to="our-history"> <li className=" pl-5 hover:bg-black/10 py-1 hover:text-amber-400 w-full">
                  Our History
                </li></Link>
              </ul>
            </div>
          )}
          <h6 className="hover:text-amber-400 cursor-pointer flex gap-1.5">
            Page <ChevronDown className="size-5 self-center" />
          </h6>
        </div>
        <Link to="contact-us"> <h6 className="hover:text-amber-400 cursor-pointer">Contact</h6></Link>
      </div>
      <div className="flex w-1/2  flex-col items-end">
        <div className="flex gap-1 mr-1">
          <Phone className="size-5" />
          <p>24/7 Support center</p>
        </div>
        <h5 className="text-amber-400">+234 80-000-0000</h5>
      </div>
    </nav>
  );
};

export default Nav;
