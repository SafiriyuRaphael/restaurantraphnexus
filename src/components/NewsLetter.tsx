import animations from "../hooks/animations"
import { motion } from "framer-motion"

const NewsLetter = () => {
  const {controls,ref,springCard}=animations()
  return (
    <motion.section animate={controls} initial="hidden" ref={ref} className="flex flex-col items-center gap-7 h-[60vh] justify-center text-center px-7 relative">
        <div className="flex flex-col gap-4 ">
      <h3 className="text-green-700 fantasy text-2xl">Newsletter</h3>
      <h3 className="lg:text-4.5xl text-3xl sm:text-4xl font-bold">Get <span className="text-amber-400">10%</span> off your order</h3>
      <p>Enter your email and receive a 10% discount on your next order</p></div>
      <div className=" lg:w-[50vw] sm:w-[70vw] w-[88vw] flex justify-between px-1 outline-1 z-30">
        <input type="email" placeholder="Enter your email..." className="outline-none w-full z-30"/>
        <button className="bg-amber-400 text-black px-3 py-2 font-bold ">SUBSCRIBE</button>
      </div>
        <motion.img variants={springCard} src="/h5_decor-left-1.png" alt="" className="absolute left-0 bottom-0 lg:block hidden"/>
        <img src="/h5_decor-left.png" alt="" className="absolute left-0 lg:bottom-16 md:block hidden lg:size-68 size-44 bottom-10"/>
        <motion.img variants={springCard} src="/h5_pizza.png" alt="" className="absolute right-0 bottom-0 md:block hidden lg:size-80 size-60"/>
    </motion.section>
  )
}

export default NewsLetter
