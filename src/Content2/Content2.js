import React, { Component } from 'react';
import './content2.scss';

class Content2 extends Component {
  render() {
    return (
        <div className="content2">
            
            <div className="title">
                <p>
                    <span className='title-left'>Lorem</span> <span className='title-right'>Ipsum</span>
                </p>
            </div>
            
            <div className="info">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sem sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </div>

            <div className="btn">
                <button>Button</button>
            </div>

            <div className="stats stat1">
                <p>240%</p>
                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor.</p>
            </div>

            <div className="stats stat2">
                <p>105%</p>
                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor.</p>
            </div>
            
            <div className="stats stat3">
                <p>159%</p>
                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor.</p>
            </div>
        </div>
    );
  }
}

export default Content2  ;