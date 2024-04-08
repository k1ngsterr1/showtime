import axios from 'axios'
import { useState } from 'react'

export function useDeleteNews() {
	const [newsData, setNewsData] = useState<any>()

	const deleteNews = async (data: any) => {
		try {
			const response = await axios.delete(
				`http://localhost:4200/api/admin/delete-news/${data.newsId}`,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
			setNewsData(response.data)
		} catch (error) {
			console.error('There was an error with deleting news')
		}
	}

	return { deleteNews, newsData }
}
