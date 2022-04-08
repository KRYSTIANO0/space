import React, { useState } from 'react'
import styles from './NavigationBar.module.css'

const NavigationBar = ({ data, navIndexUp, activeClassName, id }) => {
	const [navigationItems] = useState(data)
	const [navIndex, setNavIndex] = useState(0)
	const onClickHandler = index => {
		setNavIndex(index)
		navIndexUp(index)
	}

	return (
		<nav className={styles.nav}>
			<ul>
				{navigationItems.map((item, index) => {
					return (
						<li
							className={`${index === navIndex && activeClassName}`}
							key={index}
							onClick={() => onClickHandler(index)}>
							{id === 'technology' && index + 1}
							{id === 'destination' && item.name}
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default NavigationBar
