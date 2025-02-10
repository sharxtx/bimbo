import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-custom": '#71767b',
        "gray-custom-light": '#e7e9ea',
        "border-gray": '#273336',
        "gray-input": '#202327',
        "icon-blue": '#1d9bf0',
        "icon-pink": '#00ba76',
        "icon-green": '#f91880',
      },
      screens: {
        xsm: '500px',
        sm: '600px',
        md: '690px',
        lg: '998px',
        xl: '1078px',
        xxl: '1265px'
      },
      borderRadius: {
        DEFAULT: "0.5rem", // Adjust as needed
      },
    },
  },
  plugins: [],
} satisfies Config;
