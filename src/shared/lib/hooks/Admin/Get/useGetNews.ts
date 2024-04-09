import axios from 'axios'
import { useState } from 'react'

export function useGetNews() {
	const [newsData, setNewsData] = useState<any>()

	const getNews = async () => {
		try {
			const response = await axios.get('http://localhost:4200/api/admin/get-news', {
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const news = response.data['news']
			console.log('here is my data:', response.data)
			return response.data['news']
			setNewsData(response.data)
		} catch (error) {
			console.error('There was an error with getting news')
		}
	}

	return { getNews, newsData }
}
