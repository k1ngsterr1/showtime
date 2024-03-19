import React from 'react'

export interface IAchievementsProps {
	image: ImageMetadata
}

export const Achievement: React.FC<IAchievementsProps> = ({ image }) => {
	return (
		<>
			<img src={image.src} alt="achievment" />
		</>
	)
}
