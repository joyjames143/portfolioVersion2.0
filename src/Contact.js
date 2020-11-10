import React from 'react'
import "./Contact.css"
import {Link} from "react-router-dom"

export default function Contact() {
    return (
        <div className="main contact">
            <div className="the-card-c">
                <div className="front-side-c"></div>
                <div className="back-side-c">
                <Link to="/contact">
                    <button className="btn-c">Connect</button>
                </Link>
                </div>
            </div>
        </div>
    )
}
