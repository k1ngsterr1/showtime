import emailjs from '@emailjs/browser'
import { useState } from 'react'

export interface SendFormData {
	name: string
	email: string
	phone_number: string
	product: string
}

export interface BookFormData {
	name: string
	email: string
	phone_number: string
	date: string
}

export function useSendEmail(setPopupOpen: (isOpen: boolean) => void) {
    const onSubmit = async (event?: React.BaseSyntheticEvent) => {
        if (event) {
			event.preventDefault()

			emailjs
				.sendForm('service_dd4uss8', 'template_4jzmmtl', event.target, 'rx3w3xxnueyg_N0Mp')
				.then(
					(result) => {
						console.log('Email successfully sent!', result.text)
						setPopupOpen(true); 
					},
					(error) => {
						console.error('Failed to send email:', error.text)
						setPopupOpen(false); 
					}
				)
		}
	}

    const onBookSubmit = async (event?: React.BaseSyntheticEvent) => {
		if (event) {
			event.preventDefault()

			emailjs
				.sendForm('service_dd4uss8', 'template_kq0i0ar', event.target, 'rx3w3xxnueyg_N0Mp')
				.then(
					(result) => {
						console.log('Email successfully sent!', result.text)
						setPopupOpen(true); 
					},
					(error) => {
						console.error('Failed to send email:', error.text)
						setPopupOpen(true); 
					}
				)
		}
	}

    return { handleProductSubmit: onSubmit, handleBookSubmit: onBookSubmit };
}