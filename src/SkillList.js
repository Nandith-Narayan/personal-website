import "./SkillList.css";
function SkillList(props){
    return(
        <div className="skill-list-container">
            <h4>{props.name}:</h4>
            <div className="skill-container">
                {props.list.map((value, id) =>(
                    <div className="skill-card" key={id}>
                        {value}</div>
                ))}
            </div>
        </div>
    );
}

export default SkillList;