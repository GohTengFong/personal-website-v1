import React, { useEffect, useRef } from 'react'
import './Contact.css'
import Typewriter from 'typewriter-effect'

const Contact = () => {
    return(
        <div style={{ fontFamily: "JBMono" }} id="contact" className="contact">
            <div className="contactWrapper">
                <div className="contact-text">
                    <h1>Contact</h1>
                </div>

                <div className="contact-content">
                    <div className="contact-header">
                        <h3>Get in touch!</h3>
                    </div>

                    <div className="contact-paragraph">
                        <div className="contact-text1">
                            <Typewriter 
                                options={{
                                    loop: false, 
                                    autoStart: true,
                                    cursor: "_",
                                    stop: true,
                                    delay: 65
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                    .typeString('<span style="color: #5a5ac8;">def </span>')
                                    .typeString('<span style="color: #c74083;">contactMe():</span>')
                                    .start()
                                }}
                            />
                        </div>
                        <div className="contact-text2">
                            <Typewriter 
                                options={{
                                    loop: false, 
                                    autoStart: true,
                                    cursor: "_",
                                    stop: true,
                                    delay: 65
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                    .pauseFor(2000)
                                    .typeString('<span style="color: #5a5ac8;">print</span>')
                                    .typeString('<span style="color: white;">("</span>')
                                    .typeString('<span style="color: #75cdb1;">Thank you so much for visiting!</span>')
                                    .typeString('<span style="color: white;">")</span>')
                                    .start()
                                }}
                            />
                        </div>
                        <div className="contact-text3">
                            <Typewriter 
                                options={{
                                    loop: false, 
                                    autoStart: true,
                                    cursor: "_",
                                    stop: true,
                                    delay: 65
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                    .pauseFor(6500)
                                    .typeString('<span style="color: #5a5ac8;">print</span>')
                                    .typeString('<span style="color: white;">("</span>')
                                    .typeString('<span style="color: #75cdb1;">Please feel free to contact me <a style="text-decoration: none" href="mailto:tengfonggoh@gmail.com">here</a></span>')
                                    .typeString('<span style="color: white;">")</span>')
                                    .start()
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact