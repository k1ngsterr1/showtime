import axios from 'axios'
import { useState } from 'react'

export function useDeleteShowman() {
	const [showmanData, setShowmanData] = useState<any>()

	const deleteShowman = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.delete(
				'https://showtime.up.railway.app/api/admin/delete-showman',
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setShowmanData(response.data)
		} catch (error) {
			console.error('There was an error with deleting showman')
		}
	}

	return { deleteShowman, showmanData }
}
