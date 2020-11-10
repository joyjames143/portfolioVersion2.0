import React from 'react'
import "./AboutDetail.css"
import Abtdetail from "./Pictures/about-detail.jpeg"
import {Link} from "react-router-dom"
import BackspaceIcon from '@material-ui/icons/Backspace';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import Button from '@material-ui/core/Button';

export default function AboutDetail() {
    return (
        <>
            <div className="about-detail-main">
                <div className="abt-card">
                    <div className="leftside"></div>
                    <div className="fade-side">
                        <Link to="/">
                        <button className="btn abt-detail-btn"><BackspaceIcon style={{ fontSize: 30 }}/></button>
                        </Link>
                    </div>
                </div>
                <div className="rightside">
                    <img className="img11" height= "100%" width= "100%"  src={Abtdetail} alt="er" /> 
                    <div className="about-description">
                        <h1>   &nbsp;A.JOY <br/>JAMES </h1> 
                        <p> Hi,..I am  a fullStack developer and an <br/> Electronics and Communication Engineer</p>
                        
                    </div>
                    <div className="abt-buttons">
                            <a href="https://github.com/joyjames143?tab=repositories" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 32 }} className="abt-icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/joyjames-in/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon   style={{ fontSize: 40 }} className="abt-icon"/>
                            </a>
                            <a href="https://drive.google.com/file/d/1HfQykykCdaNSL5vMWHyLvNEQtCZ-a7SU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" className="abt-icon-btn" color="primary" startIcon={<DescriptionIcon />}>
                                    resume
                                </Button>
                            </a>
                            
                    </div>
                </div>
            </div>
        </>
    )
}
