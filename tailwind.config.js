import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                lg: "50px",
                xl: "100px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: "Poppins, sans-serif",
            },
            colors: {
                "dark-indigo": "#241D4E", // Biru gelap yang lebih cerah
                primary: "#7B1FA2", // Ungu tua yang lebih menarik
                secondary: "#64E9FF", // Biru cerah yang mencolok
                "butter-yellow": "#E4B800", // Kuning yang lebih cerah dan menarik
                "lavender-pink": "#FFA3E0", // Pink lavender yang lebih cerah dan mencolok
                "persian-pink": "#FF99D8", // Pink Persia yang lebih terang dan mencolok
                "iron-grey": "#ECEFF1", // Abu-abu yang lebih cerah dan bersih
                "pastel-purple": "#7F6FA0", // Ungu pastel yang lebih gelap dan menarik
    "bluish-purple": "#483D8B", // Ungu kebiruan yang lebih gelap dan menarik
                "smoke-purple": "#C8B2F1" // Ungu asap yang lebih cerah dan menarik
            }
            ,
        },
    },

    plugins: [forms, typography],
};