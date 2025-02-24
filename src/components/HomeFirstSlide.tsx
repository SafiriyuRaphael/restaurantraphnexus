import { useEffect, useState } from "react";
import SlideSelect from "./SlideSelect";
import { motion } from "framer-motion";
import animations from "../hooks/animations";

type Headpage = {
  h3: string;
  h1: string;
  p: string;
  img: string;
};

const HomeFirstSlide = () => {
  const {
    controls,
    containerVariants,
    leftCard,
    rightCard,
    downCard,
    opacityCard,
  } = animations();

  const [homepage, setHomepage] = useState<number>(0);
  const [secondSlide, setSecondSlide] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHomepage((prev) => (prev === 1 ? 0 : 1));
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  useEffect((): void => {
    setSecondSlide(homepage !== 0);
    controls.set("hidden");
    controls.start("visible");
  }, [homepage]);

  const hero: Headpage[] = [
    {
      h3: "hot & special",
      h1: "Spicy Fried Chicken",
      p: "Italian food with special sauce is a flavor you can find only in POCO",
      img: "/fried-chicken.png",
    },
    {
      h3: "Limited edition",
      h1: "New Onion Burger",
      p: "Fast food for fast times and convenience",
      img: "/rev_home7-2_img1 (2).png",
    },
  ];

  return (
    <div
      className={`grid -z-20 ${
        !secondSlide ? "bg-[#754628] xl:py-16" : "bg-[#567924] xl:py-0"
      } grid-cols-1 md:grid-cols-2 w-screen justify-center items-center relative md:py-20  px-7 transition-colors duration-1000`}
    >
      <motion.div
        className="flex flex-col gap-5 items-start"
        animate={controls}
        variants={containerVariants}
        initial="hidden"
      >
        <div className="text-white flex flex-col items-center justify-center  md:items-start md:justify-start gap-2.5 sm:gap-1.5 pt-16 md:pt-0">
          <motion.h3
            variants={leftCard}
            className="text-amber-400 sm:text-5xl text-4xl lg:text-3xl md:text-2xl fantasy font-extrabold"
          >
            {hero[homepage].h3}
          </motion.h3>
          <motion.h1
            variants={leftCard}
            className="lg:text-[4.5rem] md:text-6xl text-4xl  sm:text-[55px] text-center md:text-start font-serif font-extrabold"
          >
            {hero[homepage].h1}
          </motion.h1>
          <div className="flex flex-col md:gap-8 md:text-left sm:text-center text-center ">
            <motion.p variants={leftCard} className="text-4xl md:text-xl">
              {hero[homepage].p}
            </motion.p>
            {!secondSlide ? (
              <motion.p variants={leftCard} className="text-xl text-white">
                Enjoy free delivery with min, purchase of{" "}
                <span className="text-amber-400 text-2xl">SUPER50</span>
              </motion.p>
            ) : (
              <motion.p variants={leftCard} className="text-2xl font-extrabold">
                From price{" "}
                <span className="block text-amber-400 lg:text-5xl font-extrabold">
                  $19.00
                </span>
              </motion.p>
            )}
          </div>
        </div>

        <motion.button
          variants={leftCard}
          className="bg-amber-400 p-4 hover:bg-white font-extrabold md:self-start self-center"
        >
          ORDER NOW
        </motion.button>
      </motion.div>

      <motion.div
        className=" flex items-center justify-between  h-full"
        animate={controls}
        variants={containerVariants}
        initial="hidden"
      >
        <div className=" h-full relative">
          {" "}
          <motion.img
            src={`${hero[homepage].img}`}
            alt=""
            className=""
            variants={rightCard}
          />
          <motion.img
            variants={opacityCard}
            src="/h7_chili.png"
            alt=""
            className={`md:block absolute ${
              !secondSlide ? "hidden -top-10 right-30" : "top-20 left-0"
            } `}
          />
          <motion.img
            variants={leftCard}
            src="/rev_home5_6.png"
            alt=""
            className={`absolute lg:size-40 md:size-28 size-24 ${
              !secondSlide ? "top-20 left-0" : "top-3 right-13"
            }`}
          />
        </div>
        <motion.img
          variants={downCard}
          src="h7_chilli-3.png"
          alt=""
          className={`md:block absolute bottom-10  ${
            !secondSlide ? "hidden right-45" : "size-13 sm:size-34 right-1/2"
          }`}
        />

        <motion.img
          variants={opacityCard}
          src="h7_leaf.png"
          alt=""
          className={`absolute  -right-0 md:block ${
            !secondSlide ? "hidden bottom-50" : "md:size-11 size-24 bottom-8"
          }`}
        />
      </motion.div>
      <motion.div
        animate={controls}
        initial="hidden"
        variants={leftCard}
        className="absolute -bottom-0 -left-2 size-16 md:size-28"
      >
        <img src="/rev_home5_5.png" alt="" />
      </motion.div>
      <SlideSelect homepage={homepage} setHomepage={setHomepage} />
      <motion.img
        animate={controls}
        initial="hidden"
        variants={rightCard}
        src="/h6_img1.png"
        alt=""
        className={`absolute -top-4 lg:-top-20 size-20 sm:size-28 lg:size-40 -right-1 z-10 ${
          secondSlide ? "hidden" : "block"
        }`}
      />
    </div>
  );
};

export default HomeFirstSlide;
