import React from 'react';
import './infos.scss';
import icon from '../assets/page-icon.svg';
import slantBG from '../assets/slanted-gradient-background.svg';


function Info () {
    return (
        <div>
            <div className='infos-container'>
                <div className='infos info1'>
                    <img src={icon} alt='Icon-one'/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
                
                <div className='infos info2'>
                    <img src={icon} alt='Icon-two'/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>

                <div className='infos info3'>
                    <img src={icon} alt='Icon-three'/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
                
                <div className='infos info4'>
                    <img src={icon} alt='Icon-four'/>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
                
                <div className='info5'>
                    <img src={slantBG} alt='Slanted Gradient Background' />
                    <p className='info5-text'>
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, hendrerit id, lorem.   
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Info;