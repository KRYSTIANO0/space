import React from 'react'
import { NavLink } from 'react-router-dom'
//styles
import styles from './navbarStyles/NavbarItem.module.css'
const NavbarItem = ({ id, title }) => {
	return (
		<NavLink
			to={`/${title}`}
			className={({ isActive }) => (isActive ? `${styles['navbar-item']} ${styles['active']}` : styles['navbar-item'])}>
			<p>{id}</p>
			<h1>{title}</h1>
		</NavLink>
	)
}

export default NavbarItem
