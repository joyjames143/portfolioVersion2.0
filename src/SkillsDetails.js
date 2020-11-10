import React from 'react'
import {Link} from "react-router-dom"
import BackspaceIcon from '@material-ui/icons/Backspace';
import "./SkillsDetail.css"
import { FaHtml5,FaCss3Alt,FaReact,FaPython,FaNodeJs } from 'react-icons/fa';
import { DiMongodb,DiJavascript1 } from 'react-icons/di';



export default function SkillDetails() {
    return (
        <>
            <div className="skill-detail-main">
                <div className="skill-card">
                    <div className="leftside-s"></div>
                    <div className="fade-side-s">
                        <Link to="/">
                        <button className="btn-s abt-detail-btn"><BackspaceIcon style={{ fontSize: 30 }}/></button>
                        </Link>
                    </div>
                </div>
                <div className="rightside-s">
                    <div className="all-cards-s">
                        <div className="card-one-s ">
                            <div className="face face1">
                                <div className="content-s">
                                    <h2>HTML</h2>
                                    <p>Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.</p>
                                </div>
                            </div>
                            <div className="face face2 ">
                                <FaHtml5 className="icon-sd"/>
                            </div>

                        </div>
                        <div className="card-one-s color-11">
                            <div className="face face1">
                                <div className="content-s">
                                    <h2>CSS</h2>
                                    <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</p>
                                </div>
                            </div>
                            <div className="face face2 color-12">
                                <FaCss3Alt className="icon-sd"/>
                            </div>

                        </div>
                        <div className="card-one-s color-21">
                            <div className="face face1">
                                <div className="content-s">
                                    <h2>JAVASCRIPT</h2>
                                    <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.</p>
                                </div>
                            </div>
                            <div className="face face2 color-22">
                                <DiJavascript1 className="icon-sd"/>
                            </div>

                        </div>
                        <div className="card-one-s color-31">
                            <div className="face face1">
                                <div className="content-s">
                                    <h2>React.JS</h2>
                                    <p>React is an open-source, front end, JavaScript library for building user interfaces or UI components.  </p>
                                </div>
                            </div>
                            <div className="face face2 color-32">
                                <FaReact className="icon-sd"/>
                            </div>

                        </div>
                        <div className="card-one-s color-41">
                            <div className="face face1">
                                <div className="content-s">
                                    <h2>PYTHON</h2>
                                    <p>Python is an interpreted, high-level and general-purpose programming language. Python is dynamically typed and garbage-collected.</p>
                                </div>
                            </div>
                            <div className="face face2 color-42">
                                <FaPython className="icon-sd"/>
                            </div>

                        </div>
                        <div className="card-one-s color-51">
                            <div className="face face1">
                                <div className="content-s">
                                    <h2>NODE.JS</h2>
                                    <p>Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.</p>
                                </div>
                            </div>
                            <div className="face face2 color-52">
                                <FaNodeJs className="icon-sd"/>
                            </div>

                        </div>
                        <div className="card-one-s color-61">
                            <div className="face face1">
                                <div className="content-s">
                                    <h2>MongoDB</h2>
                                    <p>MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.</p>
                                </div>
                            </div>
                            <div className="face face2 color-62">
                                <DiMongodb className="icon-sd"/>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    ) 
}
