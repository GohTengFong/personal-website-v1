import React, { useRef } from "react";
import "./About.css";
import PORTRAIT from "../images/derp.jpg";
import "../../fonts/Font.css";
import { color, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div style={{ fontFamily: "JBMono" }} id="about" className="about">
      <div className="aboutWrapper">
        <img
          style={{
            transform: isInView ? "none" : "translateX(-5px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={ref}
          className="photo"
          src={PORTRAIT}
        />

        <div
          style={{
            transform: isInView ? "none" : "translateX(+5px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          ref={ref}
          className="paragraph"
        >
          <div className="header">
            <span className="purple">def</span>{" "}
            <span className="red">aboutMe():</span>
          </div>

          <div className="body">
            <div className="body-1">
              <div className="print">
                <span className="purple">print</span>
                <span>("</span>
              </div>
              <div className="text">
                <span className="cyan">
                  I'm Teng Fong, a Year 2 Computer Science student studying in
                  the National Univesity of Singapore. I am interested in many
                  different aspects of computing, the main one being Artifical
                  Intelligence and Machine Learning.
                </span>
                <span>")</span>
              </div>
            </div>

            <div className="body-2">
              <div className="print">
                <span className="purple">print</span>
                <span>("</span>
              </div>
              <div className="text">
                <span className="cyan">
                  Currently, I am learning more about Fullstack Web Development
                  and building a Healthcare AI Chatbot.
                </span>
                <span>")</span>
              </div>
            </div>

            <div className="body-3">
              <div className="print">
                <span className="purple">print</span>
                <span>("</span>
              </div>
              <div className="text">
                <span className="cyan">
                  Outside of programming, I enjoy social work, sports and
                  learning new things!
                </span>
                <span>")</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
