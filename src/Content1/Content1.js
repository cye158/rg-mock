import React, { Component } from 'react';
import './content1.scss';
import Carousel from './Carousel';
import Infos from './Infos';


class Content1 extends Component {
	render() {
		return (
			<div className="content1">
                <Carousel />
                <Infos />
			</div>
		);
	}
}

export default Content1;