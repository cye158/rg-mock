import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import './content2.scss';
import Modal from 'react-responsive-modal';
import ModalContent from '../ModalContent/ModalContent';

class Content2 extends Component {
    constructor(){
        super();
        this.state = {
            openModal: false,
        }
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    showModal = () => {
        this.setState({
            openModal: true,
        });
    }

    closeModal = () => {
        this.setState({
            openModal: false,
        });
    }
    
    render() {
        ScrollReveal().reveal('.stat1', { easing: 'ease-in', delay: 300, duration: 600 });
        ScrollReveal().reveal('.stat2', { easing: 'ease-in', delay: 600, duration: 600 });
        ScrollReveal().reveal('.stat3', { easing: 'ease-in', delay: 900, duration: 600 });
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
                    <button onClick={this.showModal}>Button</button>
                </div>
                <Modal open={this.state.openModal} onClose={this.closeModal} center>
                    <ModalContent />
                </Modal>

                    <div className="stat1">
                        <p>210%</p>
                        <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor.</p>
                    </div>

                <div className="stat2">
                    <p>105%</p>
                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor.</p>
                </div>
                
                <div className="stat3">
                    <p>159%</p>
                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor.</p>
                </div>
            </div>
        );
    }
}

export default Content2  ;