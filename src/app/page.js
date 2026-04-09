import NavBar from "./components/nagvar";
import Hero from "./components/hero";
import BlackSection from "./components/section-black";

export default function Home(){
    return(
        <div>
            <NavBar variant="full" />
            <Hero />
            <BlackSection />
        </div>

    )
}