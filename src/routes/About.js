import React from "react";
import "../css/About.css"

function About({id, summary}){
    return(
        <div className="about_container">
            <span>
                {summary}
            </span>
            <span>last child span</span>
        </div>
    )
}

export default About;