/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'brand': {
          'primary': '#3B82F6',
          'secondary': '#8B5CF6',
          'accent': '#EC4899',
        }
      }
    },
  },
  plugins: [],
}

