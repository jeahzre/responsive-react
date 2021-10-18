import React from 'react';
import Button from './Button';
import './HeroSection.css';

const HeroSection = () => {
	return (
		<div className="hero-container">
		<video src="/videos/video-1.mp4" autoPlay loop muted />
		<div className="explanation">
		<h1>ADVENTURE AWAITS</h1>
		<p>What are you waiting for?</p>
		<div className="hero-btns">
		<Button className="btns" buttonStyle="btn--outline">GET STARTED</Button>
		<Button className="btns" buttonStyle="btn--primary">WATCH TRAILER<i className="far fa-play-circle"/></Button>
		</div>
		</div>
		</div>
	)
}

export default HeroSection;
