export const useCustomSwiper = (swiperRef: any) => {
	const handlePrev = () => {
		if (swiperRef.current) {
			swiperRef.current.slidePrev()
		}
	}

	const handleNext = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext()
		}
	}

	return { handleNext, handlePrev }
}
