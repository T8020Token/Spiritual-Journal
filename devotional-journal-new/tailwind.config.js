/** @type {import('tailwindcss').Config} */

module.exports = {
content: [
'./index.html',
'./src/**/*.{js,ts,jsx,tsx}',
],
theme: {
extend: {
colors: {
'fire': '#8B0000',
'parchment': '#F5F5DC',
},
fontFamily: {
'serif': ['Georgia', 'serif'],
},
},
},
plugins: [],
};
