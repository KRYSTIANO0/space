import React, { useEffect, useState } from 'react'
import logo from '../../data/logo.svg'
//icons
import { FaBars } from 'react-icons/fa'
//components
import NavbarItem from './NavbarItem'
//styles
import styles from './navbarStyles/Navbar.module.css'
import useGetData from '../../hooks/useGetData'
const navbarURL = 'https://space-website-ea098-default-rtdb.firebaseio.com/navbar.json'
const Navbar = () => {
	const [showMenu, setShowMenu] = useState(true)
	const { data: navbarData } = useGetData(navbarURL)

	useEffect(() => {
		const resizeW = () => {
			if (window.innerWidth > 768) {
				setShowMenu(true)
			}
		}
		window.addEventListener('resize', resizeW)
		//clean up
		return () => window.removeEventListener('resize', resizeW)
	}, [])
	const menuBtnHandler = () => {
		setShowMenu(prevState => {
			return !prevState
		})
	}
	return (
		<>
			<nav className={styles['nav']}>
				<img src={logo} alt='logo' />
				<button className={styles['menu-btn']} onClick={menuBtnHandler}>
					<FaBars />
				</button>
			</nav>
			{showMenu && navbarData && (
				<menu className={styles['menu']}>
					<span></span>
					{navbarData.map(navbarItem => {
						return <NavbarItem key={navbarItem.mainID} {...navbarItem} />
					})}
				</menu>
			)}
		</>
	)
}

export default Navbar
