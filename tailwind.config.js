/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],

    theme: {
        extend: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },

            colors: {
                white: "#ffffff",
                green: "#608270",
                light_green: "#C1D3D3",
                black: "#181818",
                bg_white: "#FBF8F8",
            },

            fontSize: {
                xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.01em" }],
                sm: ["16px", { lineHeight: "28px", letterSpacing: "-0.01em" }],
                lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.01em" }],
                xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.01em" }],
                "1xl": [
                    "30px",
                    { lineHeight: "40px", letterSpacing: "-0.032" },
                ],

                "2xl": [
                    "36px",
                    { lineHeight: "48px", letterSpacing: "-0.032" },
                ],
                "3xl": [
                    "48px",
                    { lineHeight: "56px", letterSpacing: "-0.032" },
                ],

                "4xl": [
                    "56px",
                    { lineHeight: "64px", letterSpacing: "-0.032" },
                ],
                "5xl": [
                    "80px",
                    { lineHeight: "80px", letterSpacing: "-0.032" },
                ],
            },
            spacing: {
                1: "8px",
                2: "12px",
                3: "16px",
                4: "24px",
                5: "32px",
                6: "48px",
            },
            fontFamily: {
                cormorant: ['Cormorant', 'serif'],  
                catamaran: ['Catamaran', 'sans-serif'],  
            },
        },
    },

    plugins: [require("@tailwindcss/typography")],
};
