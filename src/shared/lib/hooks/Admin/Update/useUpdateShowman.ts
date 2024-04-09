import axios from 'axios'
import { useState } from 'react'

export function useUpdateShowman() {
	const [showmanData, setShowmanData] = useState<any>()

	const updateShowman = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch('http://localhost:4200/api/admin/add-showman', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setShowmanData(response.data)
		} catch (error) {
			console.error('There was an error with updating showman')
		}
	}

	return { updateShowman, showmanData }
}
