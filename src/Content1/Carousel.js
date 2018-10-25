import React, {Component} from 'react';
import './carousel.scss';

import imageOne from '../assets/hero-img.jpg';
import imageTwo from '../assets/iStock-503300108.jpg';
import imageThree from '../assets/cafe-cup-table.jpg';


const images = [
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

class Carousel extends Component {
	
	constructor(props){
		super(props);
		this.state = {
            index: 0,
            name: images[0].name,
		    image: images[0].image,
        }
        this.setImage = this.setImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.slideInterval = this.slideInterval.bind(this);
	}

	setImage = (val) => {
        clearInterval(this.slideInterval());
		this.setState({
            index: val,
            name: images[val].name,
            image: images[val].image,
        });
        this.slideInterval();
    }
    
    nextImage = () => {
        clearInterval(this.slideInterval());
        if(this.state.index === images.length - 1){
            this.setImage(0);
        }
        else {
            this.setImage(this.state.index + 1);
        }
        this.slideInterval();
    }

    slideInterval = () => {
        //setInterval(this.nextImage, 5000);
    }

    render(){
        return (
            <div className="img-carousel">
            
                <div className="slide">
                        <img src={this.state.image} alt={this.state.name}></img>
                </div>

                <div className="dots">
                    <span className="dot" onClick={ () => this.setImage(0) } ></span>
                    <span className="dot" onClick={ () => this.setImage(1) } ></span>
                    <span className="dot" onClick={ () => this.setImage(2) } ></span>
                </div>
                
            </div>
        );
    }
    
}

export default Carousel;