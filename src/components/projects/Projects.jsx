import React from 'react'
import './Projects.css'

const Projects = () => {
    return(
        <div style={{ fontFamily: "JBMono" }} id="projects" className="projects">
            <div className="projectsWrapper">
                <div className="projects-text">
                    <h2>Projects</h2>
                </div>

                <div className="projects-content">
                    <div className="col2">
                        <div className="project2">
                            <div className="project2-image">
                                p2Image
                            </div>
                            <div className="project2-description">
                                <h5>p2Title</h5>
                                my second project!
                            </div>
                            <div className="project2-tech">
                                tech involved!
                            </div>
                        </div>
                    </div>

                    <div className="col1">
                        <div className="project1">
                            <div className="project1-image">
                                p1Image
                            </div>
                            <div className="project1-description">
                                <h5>p1Title</h5>
                                my first project!
                            </div>
                            <div className="project1-tech">
                                tech involved!
                            </div>
                        </div>
                        <div className="project3">
                            <div className="project3-image">
                                p3Image
                            </div>
                            <div className="project3-description">
                                <h5>p3Title</h5>
                                my third project!
                            </div>
                            <div className="project3-tech">
                                tech involved!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects