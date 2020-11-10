import React from 'react'
import "./ProjectsDetail.css"
import {Link} from "react-router-dom"
import { FaEye,FaGithub,FaEyeSlash } from 'react-icons/fa';
import BackspaceIcon from '@material-ui/icons/Backspace';

export default function ProjectDetail() {
    return (
        <>
        <div className="project-detail-main">
            <div className="project-card">
                <div className="leftside-p"></div>
                <div className="fade-side-p">
                        <Link to="/">
                        <button className="btn-p abt-detail-btn"><BackspaceIcon style={{ fontSize: 30 }}/></button>
                        </Link>
                    </div>
            </div>
            <div className="rightside-p">
                <div className="all-project-cards">
                <div className="card">
                        
                        <div className="card-text">
                            <h2>Codepen clone</h2>
                        </div>
                        <div className="card-image five"></div>
                        <div className="card-links">
                            <div className="card-btn-div">
                                <a href="https://codehere-jj.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn"><FaEye/>&nbsp;Live link</button>
                                </a>
                            </div>
                            <div className="card-btn-div ">
                                <a href="https://github.com/joyjames143/jj-version-codepen" target="_blank" rel="noopener noreferrer">
                                <button className="card-btn git"><FaGithub/>&nbsp;github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        
                        <div className="card-text">
                            <h2>E-commerce</h2>
                        </div>
                        <div className="card-image one"></div>
                        <div className="card-links">
                            <div className="card-btn-div">
                                <a href="https://react-phone-store-joy.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn"><FaEye/>&nbsp;Live link</button>
                                </a>
                            </div>
                            <div className="card-btn-div ">
                                <a href="https://github.com/joyjames143/react-book-store" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn git"><FaGithub/>&nbsp;github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        
                        <div className="card-text">
                            <h2>Expense tracker</h2>
                        </div>
                        <div className="card-image three"></div>
                        <div className="card-links">
                            <div className="card-btn-div"><a href="https://jj-expense-tracker.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn"><FaEye/>&nbsp;Live link</button>
                                </a></div>
                            <div className="card-btn-div ">
                                <a href="https://github.com/joyjames143/react-ExpenseTracer" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn git"><FaGithub/>&nbsp;github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        
                        <div className="card-text">
                            <h2>Corona Stats</h2>
                        </div>
                        <div className="card-image six"></div>
                        <div className="card-links">
                            <div className="card-btn-div"><a href="https://jj-covid-tracker.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn"><FaEye/>&nbsp;Live link</button>
                                </a></div>
                            <div className="card-btn-div ">
                                <a href="https://github.com/joyjames143/covid-19-tracker" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn git"><FaGithub/>&nbsp;github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        
                        <div className="card-text">
                            <h2>Zoom clone</h2>
                        </div>
                        <div className="card-image eight"></div>
                        <div className="card-links">
                            <div className="card-btn-div"><a href="https://jj-zc.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn"><FaEye/>&nbsp;Live link</button>
                                </a></div>
                            <div className="card-btn-div "><button className="card-btn git no"><FaGithub/>&nbsp;github</button></div>
                        </div>
                    </div>
                    <div className="card">
                        
                        <div className="card-text">
                            <h2>Weather App</h2>
                        </div>
                        <div className="card-image four"></div>
                        <div className="card-links">
                            <div className="card-btn-div"><a href="https://weatheranyplace.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn"><FaEye/>&nbsp;Live link</button>
                                </a></div>
                            <div className="card-btn-div ">
                                <a href="https://github.com/joyjames143/weather-react" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn git"><FaGithub/>&nbsp;github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        
                        <div className="card-text">
                            <h2>CricketScore--{">"}Msg</h2>
                        </div>
                        <div className="card-image seven"></div>
                        <div className="card-links">
                            <div className="card-btn-div"><button className="card-btn no"><FaEyeSlash/>&nbsp;Live link</button></div>
                            <div className="card-btn-div ">
                                <a href="https://github.com/joyjames143/python-cricket-score-live" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn git"><FaGithub/>&nbsp;github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        
                        <div className="card-text">
                            <h2>Movie DB</h2>
                        </div>
                        <div className="card-image two"></div>
                        <div className="card-links">
                            <div className="card-btn-div"><a href="https://joy-moviedb.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn"><FaEye/>&nbsp;Live link</button>
                                </a></div>
                            <div className="card-btn-div ">
                                <a href="https://github.com/joyjames143/movie-database-using-react" target="_blank" rel="noopener noreferrer">
                                    <button className="card-btn git"><FaGithub/>&nbsp;github</button>
                                </a> 
                            </div>
                        </div>
                    </div> 
    
                </div>
            </div>
        </div>
    </>
    )
}

