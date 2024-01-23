import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      padding: {
        '25': '25px',
      },
      maxWidth: {
        '1/2': '50%',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      backgroundColor: {
        ['barbie-pink']: '#fe007f',
      },
    },
  },
  plugins: [],
} satisfies Config;
