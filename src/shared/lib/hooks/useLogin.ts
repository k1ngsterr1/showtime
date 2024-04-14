import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

interface ILoginData {
	email: string
	password: string
}

export async function loginAccount(loginData: ILoginData) {
	try {
		const response = await axios.post(
			'https://showtimeserver-production.up.railway.app/api/auth/login',
			loginData
		)
		// let videoChatWindow = window.open(
		// 	'https://recursing-saha.185-98-5-231.plesk.page',
		// 	'VideoChatWindow'
		// )
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

		console.log('Sending data to video chat:', {
			refreshToken: tokenData.refreshToken,
			userData: userData
		})

		// videoChatWindow!.postMessage(
		// 	{ refreshToken: tokenData.refreshToken, userData: JSON.stringify(userData) },
		// 	'http://localhost:3000/'
		// )

		console.log('Data sent.')

		window.location.href = '/auth'
	} catch (error: any) {
		console.log(loginData)
		console.error('Failed to login:', error.response ? error.response.data : error)
		return error.response.data.message
	}
}
