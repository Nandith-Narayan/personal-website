import "./Navigation.css";

function Navigation(props){
    let allViews = ["about-me", "projects"];
    let headings = {"about-me":"About Me", "projects":"My Projects"};
    return (
        <div className="header">
            <h1>Nandith Narayan</h1>
            <ul>
                {allViews.map((value, id) => (
                    <li key={id}>
                        <button key={id}
                                className={props.view === value ? "active-view":"inactive-view"}
                                onClick={() => {props.setView(value);}}
                        >{value}</button>
                    </li>
                ))}
            </ul>
            <div id="heading">
                <h2>{headings[props.view]}</h2>
            </div>
        </div>
    );

}

export default Navigation;