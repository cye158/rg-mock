import React, { Component } from 'react';
import './modalcontent.scss';


class ModalContent extends Component {
    render(){
        return(
            <div>
                <div className="title">LOREM IPSUM</div>
                <div className="name">
                    <p>Your Name</p>
                    <input className='' value='' onChange='' placeholder='Enter Name'/>
                </div>
                <div className="email">
                    <p>Your Email</p>
                    <input className='' value='' onChange='' placeholder='Enter Email'/></div>
                <div className="phone">
                    <p>Your Phone</p>
                    <input className='' value='' onChange='' placeholder='Enter Phone'/></div>
                <div className="message">
                    <p>Your Message</p>
                    <input className='' value='' onChange='' placeholder='Enter Message'/></div>
                <div className="button">Button</div>
            </div>
        );
    }
}

export default ModalContent;