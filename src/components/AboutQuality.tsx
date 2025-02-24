import animations from "../hooks/animations"
import { motion } from "framer-motion"

type Quality={
    heading: string
    paragraph: string
    img:string
}
const AboutQuality = () => {

  const{ref,containerVariants, controls, rightCard, leftCard}=animations()
    const qualities:Quality[]=[{
        heading:'Chicken', paragraph:"Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100% chicken breast meat.", img:"/about-imager-5.png"
    },
    {
        heading:'Burger', paragraph:"Some of the world’s best cheese is made close to home! All our deliciously melty Mozzarella is made with 100% Canadian milk. We’re proud to support Canadian dairy farmers.", img:"/about-imager-6.png"
    },
    {
        heading:'Pizza Douch', paragraph:"Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100% chicken breast meat.", img:"/about-imager-7.png"
    },
]


  return (
    <motion.section ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="py-24 items-start justify-between flex w-screen flex-col gap-20">
      {qualities.map((quality,i)=>(
        <div key={i} className={`flex-col flex px-7 md:py- gap-4  w-screen items-center md:text-start text-center justify-center md:justify-between  ${i===1?"md:flex-row-reverse":"md:flex-row"}`}>
        <div className="lg:w-[40vw] md:w-[50vw] flex flex-col gap-2.5">
            <p className="text-amber-400 fantasy font-bold">Our Quality</p>
            <h3 className="font-bold lg:text-5xl text-4xl">{quality.heading}</h3>
            <p className="lg:text-xl text-gray-500">{quality.paragraph}</p>
            <button className="bg-amber-400 px-6 py-3 self-center md:self-start hover:text-white">ORDER NOW</button>
        </div>
        <motion.div variants={i===1?leftCard:rightCard} className=" flex self-start px-7">
            <img src={`${quality.img}`} alt="" className=""/>

        </motion.div>
        </div>
      ))}
    </motion.section>
  )
}

export default AboutQuality
