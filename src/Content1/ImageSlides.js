import React, {Component} from 'react';
import './imageslides.scss';

import imageOne from '../assets/hero-img.jpg';
import imageTwo from '../assets/iStock-503300108.jpg';
import imageThree from '../assets/cafe-cup-table.jpg';

import Slider from 'react-slick';
import Modal from 'react-responsive-modal';
import ModalContent from '../ModalContent/ModalContent';


const data = [
    {
        id: 1,
        name: 'Image One',
        image: imageOne
    },
    {
        id: 2,
        name: 'Image Two',
        image: imageTwo
    },
    {
        id: 3,
        name: 'Image Three',
        image: imageThree
    },
];

class ImageSlides extends Component {
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
    
    render(){

        const settings = {
            autoplay: true,
            easing: 'ease-out',
            autoplaySpeed: 5000,
            speed: 2000
        }

        return (
            <div className="img-carousel">
            
                <div className="slide-overlay-info">
                    <header>Lorem Ipsum Lorem Ipsum</header>
                    <div className="btn">
                        <button onClick={this.showModal}>Button</button>
                    </div>
                    <Modal open={this.state.openModal} onClose={this.closeModal} center>
                        <ModalContent />
                    </Modal>

                </div>

                <div className="slide">
                    <Slider  {...settings}>
                        <div> <img  style={{height: "100%"}} src={data[0].image} alt={data[0].name} /> </div>
                        <div> <img style={{width: "100%"}} src={data[1].image} alt={data[1].name} /> </div>
                        <div> <img style={{width: "100%"}} src={data[2].image} alt={data[2].name} /> </div>
                    </Slider>
                </div>

            </div>
        );
    }
    
}

export default ImageSlides;