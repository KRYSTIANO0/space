import React, { useState } from 'react'
//styles
import styles from './pagesStyles/Destination.module.css'
//data
import data from '../data/data.json'
//components
import NavigationBar from '../components/UI/NavigationBar/NavigationBar'
import DestinationContent from '../components/Destination/DestinationContent'

const Destination = () => {
	const [destinationsData] = useState(data.destinations)
	const navIndexCon = index => {
		setNavIndex(index)
	}
	const [navIndex, setNavIndex] = useState(0)
	const { name, travel, images, distance, description } = destinationsData[navIndex]

	return (
		<section className='background-image' id={styles['destination']}>
			<header className='global-header'>01 pick your destination</header>
			<div className={styles['container']}>
				<img src={images.png} alt={name} />
				<div className={styles['content']}>
					<NavigationBar
						id='destination'
						activeClassName={styles['active']}
						data={destinationsData}
						navIndexUp={navIndexCon}
					/>
					<DestinationContent name={name} travel={travel} distance={distance} description={description} />
				</div>
			</div>
		</section>
	)
}

export default Destination
