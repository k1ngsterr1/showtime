import axios from 'axios'

export function useChangeRank() {
	const changeRank = async (email: string) => {
		try {
			const response = await axios.patch(
				`https://showtime.up.railway.app/api/admin/change-rank/${email}`
			)

			console.log(response)
		} catch (error) {
			console.error('There was an error with rank editting')
		}
	}

	return { changeRank }
}
