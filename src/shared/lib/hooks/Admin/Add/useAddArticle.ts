import axios from 'axios'
import { useState } from 'react'

export function useAddArticle() {
	const [articleData, setArticleData] = useState<any>()

	const addArticle = async (data: any) => {
		try {
			const formData = new FormData()
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh
			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post(
				'https://showtimeserver-production.up.railway.app/api/admin/add-article',
				data,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)
			console.log('here is my data:', data, response.data)
			setArticleData(response.data)
		} catch (error) {
			console.error('There was an error with adding article')
		}
	}

	return { addArticle, articleData }
}
