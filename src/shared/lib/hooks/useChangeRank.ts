import axios from 'axios'

export function useChangeRank() {
	const changeRank = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.patch(
				`https://showtimeserver-production.up.railway.app/api/admin/change-rank`,
				data,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)
			console.log(response.data)
		} catch (error) {
			console.error('There was an error with rank editting')
		}
	}

	return { changeRank }
}
