import React, { Component } from 'react';
import './content1.scss';
import ImageSlides from './ImageSlides';
import Infos from './Infos';


class Content1 extends Component {
	render() {
		return (
			<div className="content1">
                <ImageSlides />
                <Infos />
			</div>
		);
	}
}

export default Content1;