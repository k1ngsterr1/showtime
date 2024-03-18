import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const useCustomMenu = () => {
	const onOpen = () => {
		gsap.to('#menu', {
			top: 0,
			duration: 0.3,
			ease: 'power3.out'
		})
	}

	const onClose = () => {
		gsap.to('#menu', {
			top: -1000,
			duration: 0.3,
			ease: 'power3.out'
		})
	}

	return { onOpen, onClose }
}
