import HeroSection from "./HeroSection/HeroSection";
import Pricing from "./Pricing/Pricing";

function Home(){
    return(
        <div className="flex flex-col justify-center">
            <HeroSection/>
            <Pricing/>
        </div>
    )
}

export default Home