import axios from 'axios'
import { useState } from 'react'

export function useGetNews() {
	const [newsData, setNewsData] = useState<any>()

	const getNews = async () => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			console.log(refreshToken)
			const response = await axios.get('http://localhost:4200/api/admin/get-news', {
				headers: {
					Authorization: `Bearer ${refreshToken}`
				}
			})
			return response.data['news']
			setNewsData(response.data)
		} catch (error) {
			console.error('There was an error with getting news')
		}
	}

	return { getNews, newsData }
}
