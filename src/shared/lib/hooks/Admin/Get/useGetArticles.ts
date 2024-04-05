import axios from 'axios'
import { useState } from 'react'

export function useGetArticles() {
	const [articlesData, setArticlesData] = useState<any>()

	const getArticles = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-articles', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			setArticlesData(response.data)
		} catch (error) {
			console.error('There was an error with getting articles')
		}
	}

	return { getArticles, articlesData }
}
