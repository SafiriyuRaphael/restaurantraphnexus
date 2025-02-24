import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

type FooterProps={
  components:boolean
}

const TopFooter = ({components}:FooterProps) => {
  return (
    <section className={`bg-[#131212] text-white py-16 relative ${components?"hidden":""} `}>
      <h3 className="text-green-600 font-extrabold whitespace-nowrap text-3xl bg-[#131212] left-1/2 transform -translate-x-1/2 absolute top-11 z-20 ">
        RaphNexus
      </h3>
      <div className="text-center lg:h-[50vh] px-7 border-t-2 border-t-gray-600/20 md:pt-10 pt-14 grid lg:grid-cols-4 md:grid-cols-2 place-content-center gap-11">
       
          <div className="flex flex-col gap-4 lg:mb-0 md:mb-16">
            <h3 className="text-xl lg:text-2xl font-bold whitespace-nowrap">
              ADDRESS
            </h3>
            <p className="text-gray-400">570 8th Ejigbo,</p>
            <p className="text-gray-400">Lagos 10001 Nigeria</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl lg:text-2xl font-bold whitespace-nowrap">
              BOOK A TABLE
            </h3>
            <p className="text-gray-400">
              Enjoy delicious meals from RaphNexus Food Truck. <br /> Call the
              Customer care section to learn more.
            </p>
            <p className="text-xl text-amber-400">(234) 000-0000</p>
        
        </div>
       
          <div className="flex flex-col gap-4">
            <h3 className="text-xl lg:text-2xl font-bold whitespace-nowrap">
              OPENING HOURS
            </h3>
            <div>
              <p className="text-gray-400">
                Monday - Friday: <span className="text-white">8am - 4pm</span>
              </p>
              <p className="text-gray-400">
                Saturday:<span className="text-white">9am - 5pm</span>
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              <Facebook className="bg-white text-black hover:bg-amber-400 cursor-pointer transition-colors duration-300 p-2 size-8  rounded-full "/>
              <Twitter className="bg-white fill-black hover:bg-amber-400 cursor-pointer transition-colors duration-300 p-2 size-8  rounded-full "/>
              <Youtube className="bg-white fill-black hover:bg-amber-400 cursor-pointer transition-colors duration-300 p-2 size-8  rounded-full "/>
              <Linkedin className="bg-white text-black hover:bg-amber-400 cursor-pointer transition-colors duration-300 p-2 size-8  rounded-full "/>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl lg:text-2xl font-bold whitespace-nowrap">
              NEWSLETTER
            </h3>
            <p className="text-gray-400">
              {" "}
              Subscribe to the weekly newsletter for all the latest updates
            </p>
            <div className="ring-1 ring-gray-500 flex gap-2 px-2">
              <input
                type="email"
                placeholder="Your Email ..."
                className="w-full "
              />
              <button className="bg-amber-400 text-black p-2.5 ">
                Subscribe
              </button>
            </div>
          </div>
       
      </div>
    </section>
  );
};

export default TopFooter;
