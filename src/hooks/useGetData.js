import React, { useEffect, useState } from 'react'

//custom hook, to fetch JSON data
const useGetData = url => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const [data, setData] = useState(null)
	const fetchData = async () => {
		setIsLoading(true)
		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error('Something goes wrong with fetching url!')
			}
			const data = await response.json()

			let fetchedData = []
			for (const key in data) {
				const object = {
					mainID: key,
					...data[key],
				}
				fetchedData.push(object)
			}
			setIsLoading(false)
			setData(fetchedData)
			return fetchedData
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}
	useEffect(() => {
		fetchData()
	}, [url])
	return {
		data,
		error,
		isLoading,
	}
}

export default useGetData
