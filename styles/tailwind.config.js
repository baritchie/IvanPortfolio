module.exports = {
    mode: 'jit',
    purge: {
        content: ['_site/**/*.html'],
        options: {
            safelist: [],
        },
    },
    theme: {
        extend: {
            colors: {
                darkblue: '#124559',
                lightblue: '#598392',
                green: '#AEC3B0',
                lightgreen: '#EFF6E0',
            },
            fontFamily: {
                quat: ['Quattrocento', 'serif'],
                quatsans: ['Quattrocento Sans', 'sans-serif'],
            },
            borderWidth: {
                1: '1px',
            },
        },
        container: {
            screens: {
                sm: "100%",
                md: "100%",
                lg: "1024px",
                xl: "1280px"
            }
        },
    },
    variants: {
        extend: {
            borderRadius: ['hover', 'focus'],
            backgroundColor: ['first', 'last', 'even', 'odd'],
        },
    },
    plugins: [],
}
