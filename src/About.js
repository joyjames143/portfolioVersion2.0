import React from 'react'
import "./About.css"
import {Link} from "react-router-dom"


export default function About() {
    return (
        <>
        <div className="main about">
            <div className="the-card">
                <div className="front-side"></div>
                <div className="back-side">
                    <Link to="/about">
                    <button className="btn">Me</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}


/*
<div className="leftside-c">
        <div className="container-c">
                 <h2>Contact Me</h2>
                 <div className="row100">
                                <div className="col">
                                    <div className="inputbox">
                                            <input type="text" name="" required="reqiured"/>
                                            <span className="text">First Name</span>
                                            <span className="line"></span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="inputbox">
                                            <input type="text" name="" required="reqiured"/>
                                            <span className="text">Last Name</span>
                                            <span className="line"></span>
                                    </div>
                                </div>
                 </div>
                    <div className="row100">
                                <div className="col">
                                    <div className="inputbox">
                                                <input type="text" name="" required="reqiured"/>
                                                <span className="text">Email</span>
                                                <span className="line"></span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="inputbox">
                                                <input type="text" name="" required="reqiured"/>
                                                <span className="text">Mobile</span>
                                                <span className="line"></span>
                                    </div>
                                </div>
                                <div className="row100">
                                        <div className="col">
                                                <div className="inputbox">
                                                    <input type="text" name="" required="reqiured"/>
                                                    <span className="text">Type your Message here..</span>
                                                    <span className="line"></span>
                                                </div>
                                        </div>
                                </div>
                    </div>
        </div>
</div>
*/
