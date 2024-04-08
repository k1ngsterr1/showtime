import axios from 'axios'
import { useState } from 'react'

export function useDeleteShowman() {
	const [showmanData, setShowmanData] = useState<any>()

	const deleteShowman = async (data: any) => {
		try {
			const response = await axios.delete('http://localhost:4200/api/admin/delete-showman', {
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json'
				}
			})

			setShowmanData(response.data)
		} catch (error) {
			console.error('There was an error with deleting showman')
		}
	}

	return { deleteShowman, showmanData }
}
