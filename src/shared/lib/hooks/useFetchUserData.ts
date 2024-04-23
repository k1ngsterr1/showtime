import axios from 'axios'
import { useState, useEffect } from 'react'

export function useFetchUserData() {
	const [fetchedData, setFetchedData] = useState<any[]>([])

	const getUserData = () => {
		if (typeof window !== 'undefined' && localStorage.getItem('userData')) {
			return JSON.parse(localStorage.getItem('userData') || '{}')
		}
		return {}
	}

	const userData = getUserData()
	const userID = userData.id

	useEffect(() => {
		const fetchData = async () => {
			if (!userID) return // If userID is not available, do not attempt to fetch data

			try {
				const response = await axios.get(
					`https://showtimeserver-production.up.railway.app/api/user/get-data/${userID}/`
				)
				setFetchedData(response.data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [userID])

	return { fetchedData }
}
