import "./Skills.css";
import SkillList from "./SkillList";

function Skills(){
    const skills = ["Java", "SQL", "C/C++", "Python", "React", "HTML", "CSS", "Numpy", "Keras", "Junit", "Git", "Software Testing",
        "Data processing for Neural Networks", "Haskell", "Compiler Construction", "Antlr", "Assembly",
        "NuXmv", "SOAR", "Emulator Development", "Go", "Blender", "AWS"];

    const languages = ["Java", "SQL", "C/C++", "Python", "JavaScript", "Haskell", "Go", "Assembly"];
    const webDev = ["React", "HTML", "CSS", "AWS", "Node.js", "Express.js"];
    const softwareDev = ["Software Testing", "Junit", "Git", ];
    const generalSkills = ["Data processing for Neural Networks", "Compiler Construction", "Antlr",
        "NuXmv", "SOAR", "Emulator Development", "Blender", "Numpy", "Keras"];
    return (
    <div className="skills">
        <h3>Skills & Abilities</h3>
        <SkillList name="Programming Languages" list={languages} />
        <SkillList name="Web Development" list={webDev} />
        <SkillList name="Software Development" list={softwareDev} />
        <SkillList name="General Skills" list={generalSkills} />
    </div>
    );
}

export default Skills;
