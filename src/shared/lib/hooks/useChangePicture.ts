import { useState } from 'react'
import { images } from '@shared/lib/content/servicesContent'

export function useChangePicture(servicesLength = 9) {
	for (let i = 0; i <= 2; i++) {
		for (let j = i; j < servicesLength; j += 3) {
			if (i == 0) {
				images[0]
			}
		}
	}
}
