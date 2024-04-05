import axios from 'axios'
import { useState } from 'react'

export function useDeleteArticle() {
	const [articleData, setArticleData] = useState<any>()

	const deleteArticle = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.delete(
				'https://showtime.up.railway.app/api/admin/delete-article',
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setArticleData(response.data)
		} catch (error) {
			console.error('There was an error with deleting article')
		}
	}

	return { deleteArticle, articleData }
}
