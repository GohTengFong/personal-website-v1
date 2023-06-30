import React from 'react'
import { useState, useEffect } from "react"
import ProgressBar from 'react-bootstrap/ProgressBar'
import "bootstrap/dist/css/bootstrap.min.css";
import './Leetcode.css'

const Leetcode = () => {
    /* Variables to store data */
    const [progress, setProgress] = useState([])

    /* Function to fetch data */
    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await fetch("https://leetcode-stats-api.herokuapp.com/GohTengFong")
                const data = await response.json()
                setProgress(data)
            } catch (error) {
                console.error("Error fetching data : ", error)
            }
        }

        fetchProgress();
    }, [])

    return(
        <div style={{ fontFamily: "JBMono" }} id="leetcode" className="leetcode">
            <div className="leetcodeWrapper">
                <div className="leetcode-text">
                    <h1>Follow my LeetCode progress!</h1>
                </div>

                <div className="leetcode-progress">
                    <div className="leetcode-rank">
                        <h3 className="header">Rank: {progress.ranking} worldwide</h3>
                    </div>

                    <div className="leetcode-bar">
                        <div className="leetcode-easy">
                            <div className="easy-header">
                                <h6 className="header">Easy : {progress.easySolved} / {progress.totalEasy}</h6>
                            </div>
                            <div className="bar">
                                <ProgressBar now={progress.easySolved} max={progress.totalEasy} variant="easy-bar" />
                            </div>
                        </div>

                        <div className="leetcode-medium">
                            <div className="medium-header">
                                <h6 className="header">Medium : {progress.mediumSolved} / {progress.totalMedium}</h6>
                            </div>
                            <div className="bar">
                                <ProgressBar now={progress.mediumSolved} max={progress.totalMedium} variant="medium-bar" />
                            </div>
                        </div>

                        <div className="leetcode-hard">
                            <div className="hard-header">
                                <h6 className="header">Hard : {progress.hardSolved} / {progress.totalHard}</h6>
                            </div>
                            <div className="bar">
                                <ProgressBar now={progress.hardSolved} max={progress.totalHard} variant="hard-bar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leetcode