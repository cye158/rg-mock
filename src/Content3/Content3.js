import React, { Component } from 'react';
import './content3.scss';
import pic1 from '../assets/img1.jpg';
import pic2 from '../assets/img2.jpg';
import ScrollReveal from 'scrollreveal';

class Content3 extends Component{
    render(){
        ScrollReveal().reveal('.pics-info', {easing: 'ease-in', duration: 750 });
        ScrollReveal().reveal('.pics', { delay: 750, easing: 'ease-in', duration: 750 });
        return (
            <div className="content3">
                <div className="title">
                    <p>
                        <span className='title-left'>Lorem</span> <span className='title-right'>Ipsum</span>
                    </p>
                </div>

                <div className="pics-info info1">
                    <header2>Lorem ipsum dolor sit amet</header2>
                    <header3>Lorem ipsum dolor sit amet lorem</header3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
                <div className="pics pic1">
                    <img src={pic1} alt='Pic One'/>
                </div>

                <div className="pics-info info2">
                    <header2>Lorem ipsum dolor sit amet</header2>
                    <header3>Lorem ipsum dolor sit amet lorem</header3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
                <div className="pics pic2">
                    <img src={pic2} alt='Pic Two'/>
                </div>
            </div>
        );
    }
}

export default Content3;