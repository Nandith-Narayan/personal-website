import './App.css';
import Navigation from "./Navigation";
import {useState} from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";

function App() {
    const [view, setView] = useState("about-me")

    return (
    <div className="App">
        <Navigation view={view} setView={setView}/>
        {view === "about-me" ?
            <AboutMe/>
            : ""
        }
        {view === "projects" ?
            <Projects/>
            : ""
        }
        {view === "resume" ?
            <Resume/>
            : ""
        }
    </div>
    );
}

export default App;
