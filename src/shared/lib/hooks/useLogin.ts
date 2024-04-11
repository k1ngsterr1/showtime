import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

interface ILoginData {
	email: string
	password: string
}

export async function loginAccount(loginData: ILoginData) {
	try {
		const response = await axios.post('http://localhost:4200/api/auth/login', loginData)

		const data = response.data.user
		const tokenData = response.data

		const userData = {
			id: data.id,
			username: data.username,
			email: data.email,
			role: data.role,
			rank: data.currentRank,
			balance: data.balance,
			refresh: tokenData.refreshToken
		}

		localStorage.setItem('userData', JSON.stringify(userData))
		Cookies.set('userData', JSON.stringify(userData))
		Cookies.set('refreshToken', tokenData.refreshToken, { expires: 7, path: '' })

		console.log(userData)

		window.location.href = '/user'
	} catch (error: any) {
		console.log(loginData)
		console.error('Failed to login:', error.response ? error.response.data : error)
		return error.response.data.message
	}
}
