import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import node from '@astrojs/node'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'

export default defineConfig({
	output: 'hybrid',
	adapter: node({
		mode: 'standalone'
	}),
	devToolbar: {
		enabled: false
	},
	integrations: [react(), tailwind(), icon(), mdx()]
})
