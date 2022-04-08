import React from 'react'
//styles
import styles from './DestinationContent.module.css'
const DestinationContent = ({ name, travel, distance, description }) => {
	return (
		<div className={styles['container']}>
			<h1 className='global-title-text'>{name}</h1>
			<p className='global-grap-text'>{description}</p>
			<div className={styles['content']}>
				<div className={styles['distance']}>
					<h2>Avg. Dsitance</h2>
					<h3>{distance}</h3>
				</div>
				<div className={styles['travel']}>
					<h2>est. travel Time</h2>
					<h3>{travel}</h3>
				</div>
			</div>
		</div>
	)
}

export default DestinationContent
