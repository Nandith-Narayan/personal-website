import './App.css';
import Navigation from "./Navigation";
import {useState} from "react";
import AboutMe from "./AboutMe";

function App() {
    const [view, setView] = useState("about-me")

    return (
    <div className="App">
        <Navigation view={view} setView={setView}/>
        {view === "about-me" ?
            <AboutMe></AboutMe>
            : ""
        }
    </div>
    );
}

export default App;
