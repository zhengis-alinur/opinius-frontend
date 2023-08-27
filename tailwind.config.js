export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                14: '14',
            },
        },
        fontFamily: {
            logo: ['Allotrop'],
        },
    },
    variants: {
        lineClamp: ['responsive', 'hover'],
    },
    plugins: [require('@tailwindcss/line-clamp'), require('flowbite/plugin')],
    darkMode: 'class',
};
