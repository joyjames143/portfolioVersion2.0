import React from 'react'
import "./Skills.css"
import {Link} from "react-router-dom"

export default function Skills() {
    return (
        <div className="main skill">
            <div className="the-card-s">
                <div className="front-side-s"></div>
                <div className="back-side-s">
                    <Link to="/skill">
                        <button className="btn-s">I have</button>
                    </Link> 
                </div>   
            </div>
        </div>
    )
}
