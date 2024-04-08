import axios from 'axios'
import { useState } from 'react'

export function useDeleteShowman() {
	const [showmanData, setShowmanData] = useState<any>()

	const deleteShowman = async (shomanId: any) => {
		try {
			const response = await axios.delete(
				'https://showtime.up.railway.app/api/admin/delete-showman'
			)

			setShowmanData(response.data)
		} catch (error) {
			console.error('There was an error with deleting showman')
		}
	}

	return { deleteShowman, showmanData }
}
