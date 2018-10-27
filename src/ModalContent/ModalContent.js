import React, { Component } from 'react';
import './modalcontent.scss';


class ModalContent extends Component {
    render(){
        return(
            <div className="modal">
                <div className="title">LOREM IPSUM</div>
                <div className="name">
                    <p>Your Name</p>
                    <input placeholder='Enter Name'/>
                </div>
                <div className="email">
                    <p>Your Email</p>
                    <input placeholder='Enter Email'/>
                </div>
                <div className="phone">
                    <p>Your Phone</p>
                    <input placeholder='Enter Phone'/>
                </div>
                <div className="message">
                    <p>Your Message</p>
                    <textarea placeholder='Enter Message'/>
                </div>
                <div className="btn">
                    <button>Button</button>
                </div>
            </div>
        );
    }
}

export default ModalContent;