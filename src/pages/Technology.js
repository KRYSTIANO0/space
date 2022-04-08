import React, { useState } from 'react'
//styles
import styles from './pagesStyles/Technology.module.css'
//data
import data from '../data/data.json'
//components
import NavigationBar from '../components/UI/NavigationBar/NavigationBar'

const Technology = () => {
	const [technologyData] = useState(data.technology)
	const [navIndex, setNavIndex] = useState(0)
	const navIndexCon = index => {
		setNavIndex(index)
	}
	const { images, name, description } = technologyData[navIndex]

	return (
		<section className='background-image' id={styles['technology']}>
			<header className='global-header'>03 space launch 101</header>
			<div className={styles['container']}>
				<NavigationBar
					id='technology'
					activeClassName={styles['active']}
					data={technologyData}
					navIndexUp={navIndexCon}
				/>
				<div className={styles['content']}>
					<h2>The tehrminology...</h2>
					<h1 className='global-title-text'>{name}</h1>
					<p>{description}</p>
				</div>
				<img src={images.portrait} alt={name} />
			</div>
		</section>
	)
}

export default Technology

// className={`${index === navIndex && styles['active']}`}
