import { defineConfig } from 'vitest/config'
import path from "path"

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        coverage: {
            provider: 'istanbul',

            reporter: ['text', 'json', 'html'],
        },
        reporters: ['html'],
        setupFiles: './src/test/setup.ts',
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})