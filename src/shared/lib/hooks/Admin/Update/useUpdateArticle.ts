import axios from 'axios'
import { useState } from 'react'

export function useUpdateArticle() {
	const [articleData, setArticleData] = useState<any>()

	const updateArticle = async (data: any) => {
		try {
			const formData = new FormData()
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh
			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtime.up.railway.app/api/admin/update-article',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)

			setArticleData(response.data)
		} catch (error) {
			console.error('There was an error with updating article')
		}
	}

	return { updateArticle, articleData }
}
