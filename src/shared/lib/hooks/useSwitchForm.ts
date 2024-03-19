import { useState } from 'react'

export const useFormType = () => {
	const [formType, setFormType] = useState('')

	const selectGameType = (type: string) => {
		setFormType(type)
		console.log(formType)
	}

	return { formType, setFormType }
}
