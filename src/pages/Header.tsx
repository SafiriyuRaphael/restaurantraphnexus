import TopHead from "../components/TopHead"
import BottomHead from "../components/BottomHead"
import Nav from "../components/Nav"



type HeaderProps={
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>
  components:boolean
}

const Header = ({setSideBar,components}:HeaderProps) => {
  
  

  
  return (
    <>
    <header>
        <TopHead/>
    </header>
        <Nav components={components}/>
        <BottomHead setSideBar={setSideBar} components={components}/>
       
        </>
  )
}

export default Header