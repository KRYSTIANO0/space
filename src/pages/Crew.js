import React, { useState } from 'react'
//styles
import styles from './pagesStyles/Crew.module.css'
//data
import data from '../data/data.json'
//components
import NavigationBar from '../components/UI/NavigationBar/NavigationBar'

const Crew = () => {
	const [crewData] = useState(data.crew)
	const navIndexCon = index => {
		setNavIndex(index)
	}
	const [navIndex, setNavIndex] = useState(0)
	const { bio, images, name, role } = crewData[navIndex]
	return (
		<section className='background-image' id={styles['crew']}>
			<div className={styles['container']}>
				<div className={styles['content']}>
					<header className='global-header'>02 meet your crew</header>
					<h2>{role}</h2>
					<h1 className='global-title-text'>{name}</h1>
					<p>{bio}</p>
					<NavigationBar id='crew' activeClassName={styles['active']} data={crewData} navIndexUp={navIndexCon} />
				</div>
				<img src={images.png} alt={name} />
			</div>
		</section>
	)
}

export default Crew
