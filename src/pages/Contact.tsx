import ContactUs from "../components/ContactUs"
import { Link } from "react-router"
import { ChevronRight } from "lucide-react"

import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <div>
       <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">Contact Us</h1>
        <div className=" flex flex-row gap-1 items-center">
            <Link to="/" className="text-gray-500">Home</Link> <p className="text-md font-extrabold"><ChevronRight className="size-4"/></p> <p>Contact us</p>
        </div>
      </div>
      <ContactUs/>
      <ContactForm/>

    </div>
  )
}

export default Contact
