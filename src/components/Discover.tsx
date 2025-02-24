import { SquareChevronRight } from "lucide-react"
import animations from "../hooks/animations"
import { motion } from "framer-motion"

const Discover = () => {
  const{controls,ref,downCard,rightCard,leftCard,scaleCard}=animations()
  return (
    <motion.section initial="hidden" animate={controls} ref={ref} className="flex gap-3.5 py-16 flex-col md:flex-row">
        <div  className="flex flex-col px-7 justify-center items-center md:items-start md:w-1/2 gap-3">
            <motion.h3 variants={downCard}  className="fantasy text-amber-400 text-4xl">Discover Menu</motion.h3>
            <motion.h3 variants={downCard}  className="lg:text-5xl text-4xl font-bold text-center md:text-left">
                We deliver anywhere in the tri-state area
            </motion.h3>
            <motion.p  variants={downCard} className="font-extralight text-gray-500 text-center md:text-left">Each freshly meal is perfectly sized for one person to enjoy at one sitting. Out fully prepared meals are delivered fresh, and ready to eat in 3 minutes</motion.p>
            <div className="flex items-center gap-5">
                <motion.button variants={leftCard} className="bg-amber-400 px-3 sm:px-8 py-2 sm:py-3 font-bold whitespace-nowrap hover:text-white">View Our Menu</motion.button>
                <div className="flex gap-1 whitespace-nowrap">
                <motion.p variants={rightCard} >View all products </motion.p><SquareChevronRight className="fill-green-600 size-7"/> </div>
            </div>

        </div>
        <div  className="w-full lg:pl-10 relative"><motion.img variants={scaleCard} src="/h7_pizza.png" alt="" /> <motion.img variants={scaleCard} src="/h7_chilli-3.png" alt="" className="absolute right-10 hidden md:block md:size-20 lg:size-32 -bottom-5" /> </div>
    </motion.section>
  )
}

export default Discover