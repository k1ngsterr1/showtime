import axios from 'axios'
import { useState } from 'react'

export function useGetArticles() {
	const [articlesData, setArticlesData] = useState<any>()

	const getArticles = async () => {
		try {
			const response = await axios.get('http://localhost:4200/api/admin/get-articles', {
				withCredentials: true
			})
			const articles = response.data['articles']
			console.log('here is my data:', response.data)
			return response.data['articles']
		} catch (error) {
			console.error('There was an error with getting articles')
		}
	}

	return { getArticles, articlesData }
}
