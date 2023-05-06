const defaultTheme = require('tailwindcss/defaultTheme');
function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        } else {
            return `rgb(var(${variableName}))`;
        }
    };
}

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/common/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/themes/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        fontFamily: {
            body: ['Poppins', 'Open Sans', 'system-ui', 'sans-serif'],
            heading: ['Open Sans', 'system-ui', 'sans-serif'],
        },
        extend: {},
    },
    colors: {
        light: withOpacity('--color-light'),
        dark: withOpacity('--color-dark'),
        accent: withOpacity('--color-accent'),
        'accent-hover': withOpacity('--color-accent-hover'),
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}