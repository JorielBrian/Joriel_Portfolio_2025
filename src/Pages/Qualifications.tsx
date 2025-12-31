import { QUALIFICATIONS, QUALIFICATIONS_PROJECTS } from "../data/qualifications";
import Experiences from "../Components/Cards/ExperienceCard";

const Qualifications = () =>{
    window.scrollTo(0, 0);
    return (
        <div className="w-4/5 mx-auto my-5 p-5 rounded-sm content-center overflow-hidden">
            { QUALIFICATIONS && <Experiences title="Key Qualifications" experiences={QUALIFICATIONS} /> }
            { QUALIFICATIONS_PROJECTS && <Experiences title="Contractual Projects" experiences={QUALIFICATIONS_PROJECTS}/> }
        </div>
    );
}
export default Qualifications;