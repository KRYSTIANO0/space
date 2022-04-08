import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
//components
import Navbar from './components/Navbar/Navbar'
//pages
const Home = React.lazy(() => import('./pages/Home'))
const Destination = React.lazy(() => import('./pages/Destination'))
const Crew = React.lazy(() => import('./pages/Crew'))
const Technology = React.lazy(() => import('./pages/Technology'))

// import Home from './pages/Home'
// import Destination from './pages/Destination'
// import Crew from './pages/Crew'
// import Technology from './pages/Technology'

function App() {
	return (
		<main>
			<Navbar />
			<Suspense fallback={<h1>Loading...</h1>}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/destination' element={<Destination />} />
					<Route path='/crew' element={<Crew />} />
					<Route path='/technology' element={<Technology />} />
				</Routes>
			</Suspense>
		</main>
	)
}

export default App
