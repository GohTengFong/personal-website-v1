import React from 'react'
import { useState } from 'react'
import './Skills.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { motion } from 'framer-motion'

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
                            <motion.img 
                                whileHover={{ scale: 1.3 }}
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                            />
                        </OverlayTrigger>
                    </div>
                    <div className="java">
                        <OverlayTrigger placement="bottom" overlay={tooltip("Java")}>
                            <motion.img 
                                whileHover={{ scale: 1.3 }}
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                            />
                        </OverlayTrigger>
                    </div>
                    <div className="html">
                        <OverlayTrigger placement="bottom" overlay={tooltip("HTML")}>
                            <motion.img 
                                whileHover={{ scale: 1.3 }}
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                            />
                        </OverlayTrigger>
                    </div>
                    <div className="css">
                        <OverlayTrigger placement="bottom" overlay={tooltip("CSS")}>
                            <motion.img 
                                whileHover={{ scale: 1.3 }}
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
                        </OverlayTrigger>
                    </div>
                    <div className="react">
                        <OverlayTrigger placement="bottom" overlay={tooltip("React")}>
                            <motion.img 
                                whileHover={{ scale: 1.3 }}
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            />
                        </OverlayTrigger>
                    </div>
                    <div className="nodejs">
                        <OverlayTrigger placement="bottom" overlay={tooltip("NodeJS")}>
                            <motion.img
                                whileHover={{ scale: 1.3 }}
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
                            />
                        </OverlayTrigger>
                    </div>
                    <div className="mongodb">
                        <OverlayTrigger placement="bottom" overlay={tooltip("MongoDB")}>
                            <motion.img
                                whileHover={{ scale: 1.3 }}
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                            />
                        </OverlayTrigger>
                    </div>
                </div>   
            </div>  
        </div>
    )
}

export default Skills