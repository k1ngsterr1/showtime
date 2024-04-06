import axios from 'axios'
import { useState } from 'react'

export function useGetShowmans() {
	const [showmansData, setShowmansData] = useState<any>()

	const getShowmans = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-showmans', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setShowmansData(response.data)
		} catch (error) {
			console.error('There was an error with getting showmans')
		}
	}

	return { getShowmans, showmansData }
}
