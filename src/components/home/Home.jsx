import React from 'react'
import './Home.css'
import { useState } from "react"
import {FaGithubSquare} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import Typewriter from 'typewriter-effect'

const Home = () => {
    /* Variables */
    const [displayCursor, setDisplayCursor] = useState(false)
    const currCursor = (displayCursor) ? "_" : ""

    /* Function to handle completion of first Typewriter (incomplete) */
    const handleComplete = () => {
        setDisplayCursor(true)
    }

    return(
        <div id="home" className='home'>
            <div style={{ fontFamily: "JBMono" }} className="introWrapper">
                <div className="intro-text">
                    <div className="intro-text1">
                        <h1 className="number">01</h1>
                        <Typewriter 
                        options={{
                            strings: "Hello world.",
                            loop: false, 
                            autoStart: true,
                            cursor: "_",
                            stop: true
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .callFunction(handleComplete)
                        }}
                    />
                    </div>
                    
                    <div className="intro-text2">
                        <h1 className="number">02</h1>
                        <Typewriter
                        options={{
                            cursor: "_",
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .pauseFor(1990)
                            .typeString("I'm Teng Fong! ☻")
                            .start();
                        }}
                        />
                    </div>
                </div>
            </div>

            <div className="intro-contact"> 
                <span><a href="https://github.com/GohTengFong" target="_blank" className="intro-contact-logo"><FaGithubSquare/></a></span>
                <span className="intro-contact-bar"> | </span>
                <span><a href="https://www.google.com.sg" target="_blank" className="intro-contact-logo"><FaLinkedinIn/></a></span>
                <span className="intro-contact-bar"> | </span>
                <span><a href="https://leetcode.com/GohTengFong" target="_blank" className="intro-contact-logo"><SiLeetcode/></a></span>
            </div>
        </div>
    )
}

export default Home