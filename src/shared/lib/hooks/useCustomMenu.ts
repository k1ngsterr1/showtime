import { useEffect } from 'react'
import gsap from 'gsap'

export const useCustomMenu = () => {
	const blockScroll = () => {
		const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight = `${scrollBarWidth}px`
		document.documentElement.style.overflow = 'hidden'
	}

	const allowScroll = () => {
		document.body.style.overflow = 'auto'
		document.body.style.paddingRight = '0'
		document.documentElement.style.overflow = 'auto'
	}

	const onOpen = () => {
		gsap.to('#menu', {
			top: 0,
			duration: 0.3,
			ease: 'power3.out'
		})
		blockScroll()
	}

	const onClose = () => {
		gsap.to('#menu', {
			top: -1000,
			duration: 0.3,
			ease: 'power3.out'
		})
		allowScroll()
	}

	return { onOpen, onClose }
}
