import { useState } from 'react'
import { images } from '@shared/lib/content/servicesContent'

const useChangePicture = (initialIndex = 0) => {
	const [index, setIndex] = useState(initialIndex)
	const changePicture = (newIndex) => {
		setIndex(newIndex % images.length)
	}

	return { selectedImage: images[index], changePicture }
}

export default useChangePicture
