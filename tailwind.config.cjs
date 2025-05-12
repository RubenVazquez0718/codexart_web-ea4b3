// tailwind.config.cjs
const path = require('path');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const generatePalette = require(
    path.resolve(__dirname, 'src/@fuse/tailwind/utils/generate-palette')
);

/**
 * Custom palettes
 *
 * Uses the generatePalette helper method to generate
 * Tailwind-like color palettes automatically
 */
const customPalettes = {
    brand: generatePalette('#2196F3'),
};

/**
 * Themes
 */
const themes = {
    // Default theme is required for theming system to work correctly!
    default: {
        primary: {
            ...colors.teal,
            DEFAULT: colors.teal[600],
        },
        accent: {
            ...colors.slate,
            DEFAULT: colors.slate[800],
        },
        warn: {
            ...colors.red,
            DEFAULT: colors.red[600],
        },
        'on-warn': {
            500: colors.red['50'],
        },
    },
    // Rest of the themes will use the 'default' as the base
    // theme and will extend it with their given configuration.
    blue: {
        primary: {
            ...colors.blue,
            DEFAULT: colors.blue[600],
        },
    },
    cyan: {
        primary: colors.cyan,
    },
    rose: {
        primary: colors.rose,
    },
    purple: {
        primary: {
            ...colors.purple,
            DEFAULT: colors.purple[600],
        },
    },
    amber: {
        primary: colors.amber,
    },
};

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',    
    './public/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require(path.resolve(__dirname, 'src/@fuse/tailwind/plugins/theming'))({
        themes,
    }),
  ],
  
}