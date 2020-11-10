import React from 'react'
import "./Projects.css"
import {Link} from "react-router-dom"

export default function Projects() {
    return (
        <div className="main project">
            <div className="the-card-p">
                <div className="front-side-p"></div>
                <div className="back-side-p">
                    <Link to="/project">
                        <button className="btn-p">I Made</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
