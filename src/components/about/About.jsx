import React from 'react'
import './About.css'
import PORTRAIT from '../images/derp.jpg'
import "../../fonts/Font.css"

const About = () => {
    return(
        <div style={{ fontFamily: "JBMono" }} id="about" className="about">
            <div className="aboutWrapper">
                <img className="photo" src={PORTRAIT} />

                <div className="paragraph">
                    <div className="header">
                        <span className="purple">def</span> <span className="red">aboutMe():</span>
                    </div>

                    <div className="body">
                        <div className="body-1">
                            <div className="print">
                                <span className="purple">print</span><span>("</span>
                            </div>
                            <div className="text">
                                <span className="cyan">I'm Teng Fong, a Year 2 Computer Science student studying in the National Univesity of Singapore. I am interested in many 
                                                       different aspects of computing, the main one being Artifical Intelligence and Machine Learning.</span><span>")</span>
                            </div>
                        </div>

                        <div className="body-2">
                            <div className="print">
                                <span className="purple">print</span><span>("</span>
                            </div>
                            <div className="text">
                                <span className="cyan">Currently, I am learning more about Fullstack Web Development and building a Healthcare AI Chatbot.</span><span>")</span>
                            </div>
                        </div>

                        <div className="body-3">
                            <div className="print">
                                <span className="purple">print</span><span>("</span>
                            </div>
                            <div className="text">
                                <span className="cyan">Outside of programming, I enjoy social work, sports and learning new things!</span><span>")</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About