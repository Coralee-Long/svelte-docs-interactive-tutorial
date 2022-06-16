import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
const { markdown } = require('svelte-preprocess-markdown')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            // 2. add '.md', to the extensions
            extensions: ['.svelte', '.md'],
            // 3. add markdown preprocessor
            preprocess: markdown(),
        }),
    ],
})
