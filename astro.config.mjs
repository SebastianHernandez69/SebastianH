// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve('./src'), // ⬅️ aquí defines el alias
                '@components': path.resolve('./src/components'),
                '@layouts': path.resolve('./src/layouts'),
                '@pages': path.resolve('./src/pages'),
                '@styles': path.resolve('./src/styles'),
                '@utils': path.resolve('./src/utils'),
            },
        },
    }
});
