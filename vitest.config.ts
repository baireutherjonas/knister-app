import { defineConfig } from 'vitest/config'
import path from "path"

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        coverage: {
            provider: 'istanbul',
            reportOnFailure: true,
            reporter: ['json-summary', 'json', 'html'],
            thresholds: {
                lines: 80,
                branches: 80,
                functions: 80,
                statements: 80
            },
            exclude: ['./src/PWABadge.tsx', './dist']
        },
        setupFiles: './src/test/setup.ts',

    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})