import axios from 'axios'
import { useState } from 'react'

export function useGetShowmans() {
	const getShowmans = async () => {
		try {
			const response = await axios.get('http://localhost:4200/api/admin/get-showmans', {
				withCredentials: true
			})
			const showmans = response.data['showmans']
			for(const showman of showmans){
				console.log(showman.url);
			}
			return response.data['showmans']
		} catch (error) {
			console.error('There was an error with getting showmans')
			return null
		}
	}

	return { getShowmans }
}
