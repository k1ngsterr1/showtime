import axios from 'axios'
import { useState } from 'react'

export function useUpdateNews() {
	const [newsData, setNewsData] = useState<any>()

	const updateNews = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtime.up.railway.app/api/admin/patch-news',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setNewsData(response.data)
		} catch (error) {
			console.error('There was an error with updating news')
		}
	}

	return { updateNews, newsData }
}
