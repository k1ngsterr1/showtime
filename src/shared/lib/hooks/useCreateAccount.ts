import axios from 'axios'

interface IAccountData {
	username: string
	email: string
	password: string
	passwordConfirmation: string
}

export async function createAccount(accountData: IAccountData) {
	try {
		const response = await axios.post(
			'https://showtime.up.railway.app/api/auth/register',
			accountData
		)
		localStorage.setItem('userId', response.data['user'].id)
		window.location.href = '/auth'
	} catch (error: any) {
		console.error('Failed to create account:', error)
		return error.response.data.message
	}
}
