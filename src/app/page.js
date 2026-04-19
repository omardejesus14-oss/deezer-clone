import NavBar from "./components/nagvar";
import Hero from "./components/hero";
import BlackSection from "./components/section-black";
import SectionWhite from "./components/section-white";
import SectionFinal from "./components/section-final"

export default function Home(){
    return(
        <div>
            <NavBar variant="full" />
            <Hero />
            <BlackSection />
            <SectionWhite /> 
            < SectionFinal/>

        
        </div>

    )
}