import "./Resume.css";
import Skills from "./Skills";

function Resume(){

    return (
        <div className="resume">
            <div className="education">
                <h3>Education</h3>
                <h4>Florida Institute of Technology, Melbourne, FL</h4>
                <p>Bachelor of Science in Computer Science GPA 3.81  (May 2022)</p>
            </div>
            <Skills/>
            <div className="experience">
                <h3>Experience</h3>
                <h4>Cognizant, Atlanta, GA</h4>
                <em>Software Developer</em>
                <ul>
                    <li>
                        
                    </li>
                    
                </ul>
                <h4>Florida Institute of Technology, Melbourne, FL</h4>
                <em>Undergraduate Research Assistant</em>
                <ul>
                    <li>
                        Developed an autonomous agent to copilot a simulated VTOL aircraft using
                        the SOAR cognitive architecture.
                    </li>
                    <li>
                        Co-authored a paper titled Assuring Increasingly Autonomous Systems in
                        Human-Machine Teams: An Urban Air Mobility Case Study that was
                        presented at the FMAS21(Formal Methods for Autonomous Systems)
                        conference.
                    </li>
                    <li>
                        Designed and developed an agree-guarantee based reasoner that performs
                        reasoning on CSADL (Cyber Security Architecture Design Language)
                    </li>
                    <li>
                        Worked with a team from Collins Aerospace to formally verify an
                        autonomous copilot system written in the SOAR cognitive architecture.
                    </li>
                    <li>
                        Designed, developed, and maintained a SOAR to NuXmv translator that
                        translates an autonomous SOAR agent for formal verification using the
                        NuXmv symbolic model checker
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;