import axios from 'axios'
import { useState } from 'react'

export function useAddArticle() {
	const [articleData, setArticleData] = useState<any>()

	const addArticle = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post(
				'https://showtime.up.railway.app/api/admin/add-article',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setArticleData(response.data)
		} catch (error) {
			console.error('There was an error with adding article')
		}
	}

	return { addArticle, articleData }
}
