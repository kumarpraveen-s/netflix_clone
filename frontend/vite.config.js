import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "https://netflix-clone-yw5d.onrender.com",
            },
        },
    },
    build: {
        outDir: "../backend/public", // Directly output to backend/public
    },
});
