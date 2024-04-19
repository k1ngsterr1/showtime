import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

interface IPasswordData {
	email: string
	newPassword: string
	newConfirmPassword: string
}

export async function useChangePassword(passwordData: IPasswordData) {
	try {
		const response = await axios.post(
			'https://showtimeserver-production.up.railway.app/api/auth/change-password',
			passwordData
		)
		// let videoChatWindow = window.open(
		// 	'https://recursing-saha.185-98-5-231.plesk.page',
		// 	'VideoChatWindow'
		// )

		// videoChatWindow!.postMessage(
		// 	{ refreshToken: tokenData.refreshToken, userData: JSON.stringify(userData) },
		// 	'http://localhost:3000/'
		// )

		console.log('Data sent.')

		window.location.href = '/login'
	} catch (error: any) {
		console.error('Failed to login:', error.response ? error.response.data : error)
		return error.response.data.message
	}
}
