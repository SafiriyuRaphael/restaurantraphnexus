import { Facebook, Twitter, Linkedin, Github, User, Search, Heart,ShoppingBasket,Store } from "lucide-react"
import TopFooter from "../components/TopFooter"
type FooterProps={
  components:boolean
}



const Footer = ({components}:FooterProps) => {
  const year:number=new Date().getFullYear()
  return (
    <footer className={`${components? "bg-white": "bg-green-500"} lg:py-0`}>
      <TopFooter components={components}/>
      <div className=" grid-cols-5 bg-white fixed bottom-0 w-full border-t border-t-gray-300 z-40 md:grid hidden lg:hidden">
        <div className="text-center border-l border-l-gray-300 py-2 flex flex-col font-semibold gap-1 items-center"><Store />
        <p>Shop</p></div>
        <div className="text-center border-l border-l-gray-300 py-2 flex flex-col font-semibold gap-1 items-center"><User className="fill-black"/>
        <p>My Account</p></div>
        <div className="text-center border-l border-l-gray-300 py-2 flex flex-col font-semibold gap-1 items-center"><Search />
        <p>Search</p></div>
        <div className="text-center border-l border-l-gray-300 py-2 flex flex-col font-semibold gap-1 items-center"><Heart className="fill-black"/>
        <p>WishList</p></div>
        <div className="text-center border-l border-l-gray-300 py-2 flex flex-col font-semibold gap-1 items-center"><ShoppingBasket/>
        <p>Cart</p></div>
      </div>

    
    <section className={`px-7 lg:py-6 md:pb-24 md:pt-7  py-6 flex md:flex-row flex-col justify-between border-t-2  items-center gap-4 ${components?"border-t-gray-200":""}`}>
      <div className={`flex lg:gap-9 gap-5 ${!components ? "hidden": ""}`} >
        <Facebook className="bg-gray-300 rounded-full p-2 lg:size-8 size-7 fill-black"/>
        <Twitter className="bg-gray-300 rounded-full p-2 lg:size-8 size-7 fill-black"/>
        <Linkedin className="bg-gray-300 rounded-full p-2 lg:size-8 size-7 fill-black"/>
        <Github className="bg-gray-300 rounded-full p-2 lg:size-8 size-7 fill-black"/>
      </div>
     
        <p className="whitespace-nowrap text-center">Copyright &copy; {year} <span className="text-amber-300">RaphNexusfood</span>. <span className="sm:inline block"> All Right Reserved</span></p>
        <div>
          <img src="/americanexpress.png" alt="" className="md:size-56 xl:size-97"/>
        </div>
    </section>
        </footer>
  )
}

export default Footer
