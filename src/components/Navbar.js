import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import Button from './Button'

const Navbar = () => {
  const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);

	// const adjustNavMenuHeight = () => {
	//   console.log(`windowHeight: ${windowHeight}`)
	//   if(windowHeight < 550) {
	//     // if(document.querySelector('.nav-menu')) {
	//     // console.log(document.querySelector('.nav-menu-container'))
	//     // if(document.querySelector('.nav-menu-container')) {
	//       document.querySelector('.nav-menu-container').style.height = '100px';
	//       if(document.querySelector('.nav-menu')) {
	//         document.querySelector('.nav-menu').style.height = '100px';
	//       }
	//       console.log(document.querySelector('.nav-menu-container').style.height)
	//     // }
	//       // console.log(document.querySelector('.nav-menu').style.height);
	//     // }
	//   }
	// };

	useEffect(() => {

	}, [windowHeight])
	// const windowHeight = window.getBoundingClientRect().height;

	const handleClick = () => {
		setClick(!click);
	}
	const closeMobileMenu = () => setClick(false);
	const showButton = () => {
		console.log(window.innerWidth)
		if(window.innerWidth <= 750) {
			setButton(false);
		} else {
			setButton(true);
		}
	}

	const handleWindowSize = () => {
		showButton();
		setWindowHeight(window.innerHeight);
		setClick(false);
	};

	const detectActiveAndSmaller = () => {
		console.log(button, click, windowHeight)
		if(click && windowHeight < 300) {
			return "nav-menu active smaller"
		} else if(click && windowHeight >= 200) {
			return "nav-menu active"
		} else {
			return "nav-menu"
		}
	}

	window.addEventListener('DOMContentLoaded', handleWindowSize);
	window.addEventListener('resize', handleWindowSize);

	return (
		<>
		<nav className="navbar">
		<div className="navbar-container">
		<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
		TRVL <i className="fas fa-plane"></i>
		</Link>
		{
			!button && 
			<div className="menu-icon" onClick={handleClick}>
			<i className={click? "fas fa-times" : "fas fa-hamburger"}></i>
			</div>
		}
		<ul className={detectActiveAndSmaller()}>
		<li className="nav-item">
		<Link to="/" className="nav-links" onClick={closeMobileMenu}>
		Home
		</Link>
		</li>
		<li className="nav-item">
		<Link to="/services" className="nav-links" onClick={closeMobileMenu}>
		Services
		</Link>
		</li>
		<li className="nav-item">
		<Link to="/products" className="nav-links" onClick={closeMobileMenu}>
		Products
		</Link>
		</li>
		<li className="nav-item nav-links-mobile">
		<Link to="/sign-up" className="links-mobile" onClick={closeMobileMenu}>
		Sign Up
		</Link>
		</li>
		</ul>
		{
			button && <Button buttonStyle="btn--outline">SIGN UP</Button>
		}
		</div>
		</nav>
		</>
	)
}

export default Navbar;
