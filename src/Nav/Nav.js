import React, { Component } from 'react';
import './nav.scss';
import logo from '../assets/igniter-logo-white.png';
import CSSTransition from 'react-transition-group/CSSTransition';


class Nav extends Component {
	render() {
		return (
			<CSSTransition
				in={true}
				appear={true}
				timeout={500}
				classNames="dropin"
				>
			
				<div className="navbar">
					<nav> 
						<a href='/#'> 
							<img src={logo} alt='Logo'/> 
						</a>
					</nav>
				</div>

			</CSSTransition>
		);
	}
}

export default Nav;