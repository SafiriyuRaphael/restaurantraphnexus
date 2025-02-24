import { MapPinCheck, Truck, Facebook, Twitter, Linkedin, Github } from "lucide-react"

const TopHead = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-7  py-3 sta">
        <div className="md:grid lg:grid-cols-2 md:grid-cols-1 gap-1 lg:gap-7 hidden">
        <div className="flex gap-2 hover:text-amber-400 cursor-pointer">
            <MapPinCheck className="size-5"/>
            <p>Find a store</p>
        </div>
        <div className="flex gap-2 hover:text-amber-400 cursor-pointer">
            <Truck className="size-5"/> <p>Order Tracking</p>
            </div></div>
        <p className=" md:w-fit flex w-full place-content-center text-center">100% Secure delivery without contacting the courier</p>
        <div className="md:flex gap-2 hidden">
            <Facebook className="fill-white size-5 hover:fill-amber-400 cursor-pointer"/>
            <Twitter className="fill-white size-5 hover:fill-amber-400 cursor-pointer"/>
            <Linkedin className="fill-white size-5 hover:fill-amber-400 cursor-pointer"/>
            <Github className="fill-white size-5 hover:fill-amber-400 cursor-pointer"/>
        </div>

    </div>
  )
}

export default TopHead