import React, { useState, useEffect, useRef } from "react";
// import "./Contact.css";
import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <section>
      <div className="h-96 bg-slate-950/70 backdrop-blur rounded-lg w-full max-w-3xl mx-auto overflow-y-scroll shadow-xl cursor-text font-mono">
        <div className="w-full p-3 bg-slate-900 flex items-center gap-1 sticky top-0">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm text-slate-200 font-semibold absolute left-[50%] -translate-x-[50%]">
            contact
          </span>
        </div>

        <div className="p-2 text-slate-100 text-lg">
          <p>Thank you for visiting!</p>
          <p className="whitespace-nowrap overflow-hidden font-light">
            ------------------------------------------------------------------------
          </p>
          <p>
            You can contact me <span className="text-violet-300">here!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

/*

const Contact = () => {
    return(
        <div style={{ fontFamily: "JBMono" }} id="contact" className="contact">
            <div className="contactWrapper">
                <div className="contact-info">
                    <div className="contact-text">
                        <h1>Contact</h1>
                    </div>

                    <div className="contact-content">
                        <div className="contact-header">
                            <h3>Get in touch!</h3>
                        </div>

                        <div className="contact-paragraph">
                            <div className="contact-function">
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
                            <div className="contact-body">
                                <div className="contact-body1">
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
                                            .pauseFor(1500)
                                            .typeString('<span style="color: #5a5ac8;">print</span><span style="color: white;">("</span>')
                                            .typeString('<span style="color: #75cdb1;">Thank you so much for visiting!</span>')
                                            .typeString('<span style="color: white;">")</span>')
                                            .start()
                                        }}
                                    />
                                </div>
                                <div className="contact-body2">
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
                                            .pauseFor(4500)
                                            .typeString('<span style="color: #5a5ac8;">print</span><span style="color: white;">("</span>')
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

                // <div className="navigate">
                //     <div className="about">
                //         About
                //     </div>
                //     <div className="projects">
                //         Projects
                //     </div>
                //     <div className="experience">
                //         Experience
                //     </div>
                // </div>
            </div>
        </div>
    )
}

*/

export default Contact;
