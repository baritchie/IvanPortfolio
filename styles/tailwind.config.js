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
        },
    },
    variants: {
        extend: {
            backgroundColor: ['odd', 'even'],
        },
    },
    plugins: [],
}
