import React, { useState } from 'react'
import './styles.scss'

const AnimatedKebabMenu: React.FC = () => {
	const [isActive, setIsActive] = useState(false)

	const toggleMenu = () => {
		setIsActive(!isActive)
	}

	return (
		<div>
			<ul className="nav">
				<div className={`kebab ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
					<figure></figure>
					<figure className="middle"></figure>
					<p className={`cross ${isActive ? 'active' : ''}`}>x</p>
					<figure></figure>
					<ul className={`dropdown ${isActive ? 'active' : ''}`}>
						<li>
							<a href="http://www.g.com">Art</a>
						</li>
						<li>
							<a href="http://www.g.com">Coding</a>
						</li>
						<li>
							<a href="http://www.g.com">Design</a>
						</li>
						<li>
							<a href="http://www.g.com">Web Development</a>
						</li>
					</ul>
				</div>
			</ul>
			<a className="follow" href="https://twitter.com/mildrenben" target="_blank">
				<i className="fa fa-twitter"></i>Follow Me
			</a>
		</div>
	)
}

export default AnimatedKebabMenu
