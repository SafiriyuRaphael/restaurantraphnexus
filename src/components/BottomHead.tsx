import {
  Gift,
  Truck,
  User,
  Heart,
  ShoppingBasket,
  Search,
  Logs,
  PhoneCall,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { RiEBike2Fill } from "react-icons/ri";
import { Link } from "react-router";

type NavProp = {
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  components: boolean;
};

const BottomHead = ({ setSideBar, components }: NavProp) => {
  const [page, setPage] = useState(false);
  return (
    <section
      className={`md:py-5 py-3 flex flex-col gap-1.5  top-0 z-[70] bg-white sticky ${
        components ? "lg:static" : "drop-shadow-xs"
      }`}
    >
      <div className="flex  items-center   px-7 justify-between z-30  sta w-full ">
        <Logs
          className="size-9 cursor-pointer hover:text-amber-400 lg:hidden"
          onClick={() => setSideBar(true)}
        />
        <h1
          className={`text-green-600 font-extrabold whitespace-nowrap  ${
            components ? "text-2xl" : "text-2xl md:text-4xl pb-3"
          }`}
        >
          RalphNexus
        </h1>
        <div
          className={`ring-1 ring-amber-400 hidden  justify-between items-center px-7 rounded-full ${
            components ? "lg:flex" : ""
          }`}
        >
          <label htmlFor="search" className="sr-only"></label>
          <input
            type="search"
            placeholder="Search products"
            className="focus:outline-none h-6"
          />{" "}
          <Search className="hover:text-amber-400 cursor-pointer" />
        </div>
        <div
          className={` items-center gap-3 hidden ${
            components ? "lg:flex" : ""
          }`}
        >
          <Truck className="size-10" />
          <div>
            <h6>Free Delivery</h6>
            <p className="text-gray-800">Details & restrictions</p>
          </div>
        </div>
        <div
          className={` items-center gap-3 hidden ${
            components ? "lg:flex" : ""
          }`}
        >
          <Gift className="size-10" />
          <div>
            <h6 className="">Daily Offers</h6>
            <p className="text-gray-800">Discount 20% off</p>
          </div>
        </div>
        <div
          className={` items-center gap-3 hidden ${
            components ? "lg:flex" : ""
          }`}
        >
          <div className="border-2 rounded-full p-1.5 hover:bg-amber-400 cursor-pointer">
            <User className="fill-black" />
          </div>
          <div className="border-2 rounded-full p-1.5 hover:bg-amber-400 cursor-pointer relative">
            <p className="rounded-full size-5 bg-amber-500 text-black absolute top-0 right-0 text-xs items-center justify-center flex ">
              8
            </p>
            <Heart className="fill-black" />
          </div>
          <div className="border-2 rounded-full p-1.5 hover:bg-amber-400 cursor-pointer relative">
            <p className="rounded-full size-5 bg-amber-500 text-black absolute top-0 right-0 text-xs items-center justify-center flex">
              8
            </p>
            <ShoppingBasket />
          </div>
        </div>
        {!components && (
          <>
            <nav className="lg:flex items-center  hidden ">
              <div className="flex  gap-8 font-extrabold">
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
                      className="absolute top-12 flex pt-4 text-black  rounded-md z-50 bg-white shadow-xs shadow-black"
                      onMouseLeave={() => setPage(false)}
                    >
                      <ul>
                        <Link to="faqs">
                          {" "}
                          <li className=" pl-5 hover:bg-black/10 py-1 hover:text-amber-400 w-44">
                            Faq
                          </li>
                        </Link>
                        <Link to="our-teams">
                          {" "}
                          <li className=" pl-5 hover:bg-black/10 py-1 hover:text-amber-400 w-full">
                            Our Teams
                          </li>
                        </Link>
                        <Link to="our-history">
                          {" "}
                          <li className=" pl-5 hover:bg-black/10 py-1 hover:text-amber-400 w-full">
                            Our History
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                  <h6 className="hover:text-amber-400 cursor-pointer flex gap-1.5 ">
                    Page <ChevronDown className="size-5 self-center" />
                  </h6>
                </div>
                <Link to="contact-us">
                  {" "}
                  <h6 className="hover:text-amber-400 cursor-pointer">
                    Contact
                  </h6>
                </Link>
              </div>
            </nav>
            <div className="xl:flex-row hidden lg:flex lg:flex-col xl:gap-4 lg:gap-2">
              <div className="flex items-center  gap-2">
                <RiEBike2Fill className="size-12 xl:block hidden fill-green-600" />
                <div>
                  <p>Call and Order In</p>
                  <h3 className="text-amber-400 text-xl xl:text-2xl font-bold">
                    +234 000-000-0000
                  </h3>
                </div>
              </div>
              <div className="flex gap-3 xl:self-center self-end">
                <div className="border-gray-300 border rounded-full p-1.5 size-10 ">
                  <Search />
                </div>
                <div className="border-gray-300 border rounded-full p-1.5 size-10 ">
                  <User />
                </div>
                <div className="border-gray-300 border rounded-full p-1.5 size-10 ">
                  <Heart />
                </div>
                <div className="border-gray-300 border rounded-full p-1.5 size-10 ">
                  <ShoppingBasket />
                </div>
              </div>
            </div>
          </>
        )}
        <PhoneCall className="size-9 lg:hidden" />
      </div>
      <div className="md:hidden items-center justify-end gap-3 flex text-center px-3">
        <div>
          <p className="text-xs sm:text-md">Call and Order In</p>
          <h3 className="text-amber-400 font-bold text-xl sm:text-2xl">
            +234 000-000-0000
          </h3>
        </div>
        <div className="border-gray-300 border rounded-full p-1.5 size-10 ">
          <Search />
        </div>{" "}
        <div className="border-gray-300 border rounded-full p-1.5 size-10 ">
          <ShoppingBasket />
        </div>
      </div>
    </section>
  );
};

export default BottomHead;
