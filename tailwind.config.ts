import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                "primary-dark": "var(--primary-dark)",
                secondary: "var(--secondary)",
                "dark-bg": "var(--dark-bg)",
                "light-bg": "var(--light-bg)",
                "dark-surface": "var(--dark-surface)",
                "light-surface": "var(--light-surface)",
                "text-main": "var(--text-main)",
                "text-light": "var(--text-light)",
                "text-inv": "var(--text-inv)",
            },
            fontFamily: {
                orbitron: ["var(--font-orbitron)", "sans-serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
