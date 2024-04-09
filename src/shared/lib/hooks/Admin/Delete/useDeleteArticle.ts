import axios from 'axios'
import { useState } from 'react'

export function useDeleteArticle() {
	const [articleData, setArticleData] = useState<any>()

	const deleteArticle = async (data: any) => {
		try {
			const response = await axios.delete(
				`http://localhost:4200/api/admin/delete-article/${data.articleId}`,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json'
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
