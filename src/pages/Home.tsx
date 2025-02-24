import Hero from "../components/Hero"
import Regular from  "../components/Regular"
import BestSelling from "../components/BestSelling"
import Discover from "../components/Discover"
import Specials from "../components/Specials"
import BestDeals from "../components/BestDeals"
import BottomHero from "../components/BottomHero"
import HeroFooter from "../components/HeroFooter"
import NewsLetter from "../components/NewsLetter"




const Home = () => {
  
  return (
    <main>
      <Hero/>
      <Regular/>
      <BestSelling/>
      <Discover/>
      <Specials/>
      <BestDeals/>
      <NewsLetter/>
      <BottomHero/>
      <HeroFooter/>
    </main>
  )
}

export default Home
