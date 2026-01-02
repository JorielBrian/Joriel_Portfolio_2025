
import Hero from "../Components/Sections/Hero";
import About from "../Components/Sections/About";
import Skills from "../Components/Sections/Skills";

const Welcome = () =>{
    window.scrollTo(0, 0);

    return (
        <div id="home" className="w-full mt-10 ml-0">
            <Hero />
            <Skills />
            <About />
        </div>
    );
}
export default Welcome;