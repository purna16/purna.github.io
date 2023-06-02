import "./AboutContent.css";
import React from 'react';
// import { render } from "@testing-library/react";
import {Link} from "react-router-dom";
import React1 from "../assets/iitb.png";
import React2 from "../assets/ci-cd.png";

const AboutContent = () => {
    // render()
    
        return (
            <div className="about">
                <div className="left">
                    <h1>Who Am I?</h1>
                    <p>Recent Graduate Seeking Entry level DevOps Role To Utilize Technical Skills and Passion For Continuous Improvement</p>
                    <Link to="/contact">
                        <button className="btn">Contact</button>
                    </Link>
                </div>
                <div className="right">
                    <div className="img-container">
                        <div className="img-stack top">
                            <img src = {React1} className="img" alt ="true"/>
                        </div>
                        <div className="img-stack bottom">
                            <img src = {React2} className="img" alt ="true"/>
                        </div>
                    </div>

                </div>
            </div>
          )
        }
    
 

export default AboutContent