import axios from 'axios'
import { useState } from 'react'

export function useDeleteShowman() {
	const [showmanData, setShowmanData] = useState<any>()

	const deleteShowman = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.delete(
				`https://showtime.up.railway.app/api/admin/delete-showman/${data.showmanId}`,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)

			console.log(response.data)

			setShowmanData(response.data)
		} catch (error) {
			console.error('There was an error with deleting showman')
		}
	}

	return { deleteShowman, showmanData }
}
