import axios from 'axios'
import { useState } from 'react'

export function useGetNews() {
	const [newsData, setNewsData] = useState<any>()

	const getNews = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-news', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setNewsData(response.data)
		} catch (error) {
			console.error('There was an error with getting news')
		}
	}

	return { getNews, newsData }
}
