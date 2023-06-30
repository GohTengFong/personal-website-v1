import React from 'react'
import { useState } from 'react'
import './Skills.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const Skills = () => {
    /* Text when hovering icons */
    const tooltip = (name) => (
        <Tooltip>
            {name}
        </Tooltip>
    )
    
    return(
        <div style={{ fontFamily: "JBMono" }} id="skills" className="skills">
            <div className="skills-contents">
                <div className="skills-text">
                    <h2>I've worked with:</h2>
                </div>
                
                <div className="icons">
                    <div className="javascript">
                        <OverlayTrigger placement="bottom" overlay={tooltip("JavaScript")}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                        </OverlayTrigger>
                    </div>
                    <div className="java">
                        <OverlayTrigger placement="bottom" overlay={tooltip("Java")}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        </OverlayTrigger>
                    </div>
                    <div className="html">
                        <OverlayTrigger placement="bottom" overlay={tooltip("HTML")}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
                        </OverlayTrigger>
                    </div>
                    <div className="css">
                        <OverlayTrigger placement="bottom" overlay={tooltip("CSS")}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
                        </OverlayTrigger>
                    </div>
                    <div className="react">
                        <OverlayTrigger placement="bottom" overlay={tooltip("React")}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        </OverlayTrigger>
                    </div>
                    <div className="nodejs">
                        <OverlayTrigger placement="bottom" overlay={tooltip("NodeJS")}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
                        </OverlayTrigger>
                    </div>
                    <div className="mongodb">
                        <OverlayTrigger placement="bottom" overlay={tooltip("MongoDB")}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" />
                        </OverlayTrigger>
                    </div>
                </div>   
            </div>  
        </div>
    )
}

export default Skills