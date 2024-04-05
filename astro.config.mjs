import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'

export default defineConfig({
	output: 'hybrid',
	devToolbar: {
		enabled: false
	},
	integrations: [react(), tailwind(), icon(), mdx()]
})
