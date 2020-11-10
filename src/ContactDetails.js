import React from 'react'
import "./ContactDetails.css"
import {Link} from "react-router-dom"
import BackspaceIcon from '@material-ui/icons/Backspace';
import emailjs from 'emailjs-com';

export default function ContactDetails() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rewywh7', 'template_z6lwfw4', e.target, 'user_43YsujxJ99DMM7H509wkJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
    }

    return (
             <>
            <div className="contact-detail-main">
            <div className="leftside-c">





                
                <div className="container-c">
                <form onSubmit={sendEmail}>
                 <h2>Contact Me</h2>  
                    <div className="row100">
                               <div className="col">
                                   <div className="inputbox">
                                           <input type="text" name="firstname" required="reqiured"/>
                                           <span className="text">First Name</span>
                                           <span className="line"></span>
                                   </div>
                               </div>
                               <div className="col">
                                   <div className="inputbox">
                                           <input type="text" name="lastname" required="reqiured"/>
                                           <span className="text">Last Name</span>
                                           <span className="line"></span>
                                   </div>
                               </div>
                    </div>
                    <div className="row100">
                            <div className="col">
                                <div className="inputbox">
                                            <input type="text" name="email" required="reqiured"/>
                                            <span className="text">Email</span>
                                            <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inputbox">
                                            <input type="text" name="number" required="reqiured"/>
                                            <span className="text">Mobile</span>
                                            <span className="line"></span>
                                </div>
                            </div>
                    </div>
                            <div className="row100">
                                    <div className="col">
                                            <div className="inputbox textarea">
                                                <textarea required="reqiured" name="message"/>
                                                <span className="text">Type your Message here..</span>
                                                <span className="line"></span>
                                            </div>
                                    </div>
                            </div>
                            <div className="row100">
                                    <div className="col">
                                        <input type="submit" value="Send"></input>
                                    </div>
                            </div>
                            </form>
                </div>

               









            </div>
                    <div className="contact-card">
                        <div className="rightside-c"></div>
                        <div className="fade-side-c">
                            <Link to="/">
                            <button className="btn-c abt-detail-btn"><BackspaceIcon style={{ fontSize: 30 }}/></button>
                            </Link>
                        </div>
                    </div>
            </div>
        </>
    )
}
