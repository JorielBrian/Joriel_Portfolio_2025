import { ABOUT } from "../index";

const About = () =>{
    return (
        <>
        <h1 className="text-4xl text-center font-bold">About Me</h1>
        <div className="w-4/5 mx-auto my-5 p-5 bg-sky-900/50 rounded-2xl content-center">
            {ABOUT && ABOUT}
        </div>
        </>
    );
}
export default About;