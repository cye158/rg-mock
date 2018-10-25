import React, { Component } from 'react';
import './nav.scss';
import logo from '../assets/igniter-logo-white.png';


class Nav extends Component {
	render() {
		return (
			<div className="navbar">
				<nav> 
					<a href='/#'> 
						<img src={logo} alt='Logo'/> 
					</a>
				</nav>
			</div>
		);
	}
}

export default Nav;