import axios from 'axios'
import { useState } from 'react'

export function useDeleteNews() {
	const [newsData, setNewsData] = useState<any>()

	const deleteNews = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.delete(
				`https://showtime.up.railway.app/api/admin/delete-news/${data.newsId}`,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)

			console.log(response.data)
			setNewsData(response.data)
		} catch (error) {
			console.error('There was an error with deleting news')
		}
	}

	return { deleteNews, newsData }
}
