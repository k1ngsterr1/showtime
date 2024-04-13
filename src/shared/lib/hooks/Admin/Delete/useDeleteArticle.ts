import axios from 'axios'
import { useState } from 'react'

export function useDeleteArticle() {
	const [articleData, setArticleData] = useState<any>()

	const deleteArticle = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.delete(
				`https://showtime.up.railway.app/api/admin/delete-article/${data.articleId}`,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)

			console.log(response.data)

			setArticleData(response.data)
		} catch (error) {
			console.error('There was an error with deleting article')
		}
	}

	return { deleteArticle, articleData }
}
