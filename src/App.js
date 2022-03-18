import './App.css';
import Navigation from "./Navigation";
import {useState} from "react";

function App() {
    const [view, setView] = useState("about-me")

    return (
    <div className="App">
      <Navigation view={view} setView={setView}/>
    </div>
    );
}

export default App;
