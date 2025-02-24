import { Link } from "react-router"
import { ChevronRight } from "lucide-react"
import AboutHead from "../components/AboutHead"
import AboutVid from "../components/AboutVid"
import AboutQuality from "../components/AboutQuality"
import AboutReviews from "../components/AboutReviews"
import AboutChef from "../components/AboutChef"
import AboutDelivery from "../components/AboutDelivery"


const About = () => {
  return (
    <div>
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">About Us</h1>
        <div className=" flex flex-row gap-1 items-center">
            <Link to="/" className="text-gray-500">Home</Link> <p className="text-md font-extrabold"><ChevronRight className="size-4"/></p> <p>About us</p>
        </div>
      </div>
      <AboutHead/>
      <AboutVid/>
      <AboutQuality/>
      <AboutReviews/>
      <AboutChef/>
      <AboutDelivery/>

    </div>
  )
}

export default About
