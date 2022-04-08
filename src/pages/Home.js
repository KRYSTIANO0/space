import React from 'react'
import { Link } from 'react-router-dom'
//styles
import styles from './pagesStyles/Home.module.css'
//custom hooks
import useGetData from '../hooks/useGetData'

const homeURL = 'https://space-website-ea098-default-rtdb.firebaseio.com/home.json'
const Home = () => {
	const { data: homeData, isLoading } = useGetData(homeURL)
	let content
	if (isLoading) {
		content = <p>Laoding...</p>
	}
	if (homeData) {
		content = (
			<>
				{homeData.map(homeDataItem => {
					return (
						<div className={styles['content']} key={homeDataItem.mainID}>
							<div className={styles['container']}>
								<div className={styles['container-item']}>
									<header>{homeDataItem.title}</header>
									<h1 className='global-title-text'>Space</h1>
									<p> {homeDataItem.description}</p>
								</div>
								<Link to='/destination' className={styles['explore']}>
									Explore
								</Link>
							</div>
						</div>
					)
				})}
			</>
		)
	}
	return (
		<section className='background-image' id={styles['home']}>
			{content}
		</section>
	)
}

export default Home
