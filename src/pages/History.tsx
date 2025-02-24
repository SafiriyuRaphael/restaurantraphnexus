import { Link } from "react-router"
import { ChevronRight } from "lucide-react"
import OurHistory from "../components/OurHistory"
import HistoryLine from "../components/HistoryLine"


const History = () => {
  return (
    <div>
       <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">Our History</h1>
        <div className=" flex flex-row gap-1 items-center">
            <Link to="/" className="text-gray-500">Home</Link> <p className="text-md font-extrabold"><ChevronRight className="size-4"/></p> <p>Our history</p>
        </div>
      </div>
      <OurHistory/>
      <HistoryLine/>
 
    </div>
  )
}

export default History
