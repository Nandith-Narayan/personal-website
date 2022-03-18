import "./AboutMe.css";

function AboutMe(){
    return (
        <div className="card-container">
            <div className="card">
                <div className="profile">
                    <img id="profile-pic" src="nnarayan.png" alt="profile"/>
                    <p>
                        I'm an aspiring software developer and graduating senior at Florida Tech.
                        My interests include formal methods, website design, emulation, machine learning, and competitive programming.
                        Currently, I work as an undergraduate research assistant as part of the A.S.S.I.S.T. lab at Florida Tech.
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="publications">
                    <h2>Publications:</h2>
                    <ol>
                        <li>
                            <a href="https://arxiv.org/abs/2110.12591" target="_blank">
                                <em>Assuring Increasingly Autonomous Systems in Human-Machine Teams: An Urban Air Mobility Case Study</em>
                                <br />
                                    Bhattacharyya, Siddhartha; Davis, Jennifer; Gupta, Anubhav; Narayan, Nandith; Matessa, Michael
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;