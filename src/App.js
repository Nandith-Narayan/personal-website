import './App.css';
import Navigation from "./Navigation";
import {useState} from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

function App() {
    const [view, setView] = useState("about-me")

    return (
    <div className="App">
        <Navigation view={view} setView={setView}/>
        {view === "about-me" ?
            <AboutMe></AboutMe>
            : ""
        }
        {view === "projects" ?
            <Projects></Projects>
            : ""
        }
    </div>
    );
}

export default App;
