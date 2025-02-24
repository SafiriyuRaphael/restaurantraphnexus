import animations from "../hooks/animations"
import { motion } from "framer-motion"

const Specials = () => {
  const{controls, ref, upCard, leftCard, rightCard}=animations()
  return (
    <motion.section animate={controls} initial="hidden" ref={ref} className="bg-[#C24E32] py-10 sm:py-16 flex items-center gap-4 text-white xl:justify-start md:justify-end justify-center px-6 bg-[url('/h7_burger.png')] bg-no-repeat lg:bg-none md:bg-left bg-center bg-contain relative">
      <div className="lg:block hidden relative">
      <img src="/h7_burger.png" alt="" />
      <motion.img variants={upCard} src="/30off.png" alt="" className="absolute right-10 -top-10"/></div>
      <div className="flex flex-col gap-6">
        <h3 className="text-fantasy text-amber-300 text-4xl text-center">Hot Fresh</h3>
        <h3 className="lg:text-8xl sm:text-7xl text-4xl text-center font-bold z-20">SPECIAL OFFER</h3>
        <div className="flex gap-5 px-8 self-center z-20">
          <p className="px-3 sm:px-5 py-2 bg-[#eb6a4a] lg:bg-gray-200/35 rounded-xl">Days</p>
          <p className="px-3 sm:px-5 py-2 bg-[#eb6a4a] lg:bg-gray-200/35 rounded-xl">Hours</p>
          <p className="px-3 sm:px-5 py-2 bg-[#eb6a4a] lg:bg-gray-200/35 rounded-xl">Mins</p>
          <p className="px-3 sm:px-5 py-2 bg-[#eb6a4a] lg:bg-gray-200/35 rounded-xl">Secs</p>
        </div>
        <button className="bg-amber-400 w-fit self-center px-7 py-2 text-black hover:text-white z-20">DISCOVER NOW</button>
        <motion.img variants={upCard} src="/h7_tomato-3.png" alt="" className="absolute lg:top-0 lg:right-0 lg:size-36 right-13 top-8 size-30 hidden md:block"/>
        <motion.img variants={upCard} src="/30off.png" alt="" className="absolute left-0 top-0 lg:hidden md:block hidden"/>
        <img src="/h7_leaf-5.png" alt="" className="absolute bottom-0 md:block hidden"/>
        <motion.img variants={rightCard} src="/h7_leaf-4.png" alt="" className="absolute bottom-0 right-0 lg:size-40 size-28" />
        <motion.img variants={leftCard} src="/h7_leaf.png" alt="" className="absolute bottom-1/2 left-5 lg:size-40 size-9 md:block lg:hidden hidden" />
      </div>
    </motion.section>
  )
}

export default Specials
