export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/flowbite/**/*.js',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                14: '14',
            },
            backgroundColor: {
                dark: '#111827',
                bg: '#F4F8FA',
                gray: '#1f2937',
            },
            textColor: {
                primary: '#105F8A',
                white: '#fff',
                'dark-text': '#9ca3af',
            },
            colors: {
                primary: '#105F8A',
            },
        },
        fontFamily: {
            logo: ['Allotrop'],
        },
    },
    variants: {
        lineClamp: ['responsive', 'hover'],
        extend: {
            backgroundColor: ['dark'],
            textColor: ['dark'],
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), require('flowbite/plugin')],
};
