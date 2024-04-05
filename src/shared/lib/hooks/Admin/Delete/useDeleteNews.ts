import axios from 'axios'
import { useState } from 'react'

export function useDeleteNews() {
	const [newsData, setNewsData] = useState<any>()

	const deleteNews = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.delete('https://showtime.up.railway.app/api/admin/delete-news', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setNewsData(response.data)
		} catch (error) {
			console.error('There was an error with deleting news')
		}
	}

	return { deleteNews, newsData }
}
