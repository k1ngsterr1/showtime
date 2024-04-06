import axios from 'axios'
import { useState } from 'react'

export function useAddShowman() {
	const [showmanData, setShowmanData] = useState<any>()

	const addShowman = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post(
				'https://showtime.up.railway.app/api/admin/add-showman',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)
			console.log(response.data)
			setShowmanData(response.data)
		} catch (error) {
			console.error('There was an error with adding showman')
		}
	}

	return { addShowman, showmanData }
}
