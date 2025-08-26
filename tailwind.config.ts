import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                fontSize: {
                        xs: ["12px", { lineHeight: "1.4" }],
                        sm: ["15px", { lineHeight: "1.4" }],
                        base: ["18px", { lineHeight: "1.5" }],
                        lg: ["24px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
                        xl: ["30px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
                        "2xl": ["37px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
                        "3xl": ["46px", { lineHeight: "1.2", letterSpacing: "-0.02em" }]
                },
                lineHeight: {
                        heading: "1.2",
                        body: "1.5",
                        ui: "1.4"
                },
                letterSpacing: {
                        tight: "-0.02em",
                        normal: "0",
                        caps: "0.05em"
                },
                spacing: {
                        1: "4px",
                        2: "8px",
                        3: "12px",
                        4: "16px",
                        6: "24px",
                        8: "32px",
                        12: "48px",
                        16: "64px"
                },
                borderRadius: {
                        xs: "2px",
                        sm: "4px",
                        md: "8px",
                        lg: "12px",
                        xl: "16px"
                },
                boxShadow: {
                        'elevation-1': '0 1px 2px rgba(22,19,19,0.04)',
                        'elevation-2': '0 2px 4px rgba(22,19,19,0.04), 0 1px 2px rgba(22,19,19,0.04)',
                        'elevation-3': '0 4px 8px rgba(22,19,19,0.06), 0 2px 4px rgba(22,19,19,0.06)',
                        'elevation-4': '0 8px 16px rgba(22,19,19,0.08), 0 4px 8px rgba(22,19,19,0.06)',
                        'elevation-5': '0 12px 24px rgba(22,19,19,0.1), 0 8px 16px rgba(22,19,19,0.08)'
                },
                colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))',
                                50: '#f5f5f5',
                                100: '#e7e7e7',
                                200: '#d1d1d1',
                                300: '#b0b0b0',
                                400: '#8d8d8d',
                                500: '#737373',
                                600: '#545454',
                                700: '#363636',
                                800: '#262626',
                                900: '#161313'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))',
                                50: '#f6f8f6',
                                100: '#e4eae4',
                                200: '#d2dccd',
                                300: '#c0cdc0',
                                400: '#aebfae',
                                500: '#9eae9e',
                                600: '#7c8f7c',
                                700: '#5b705b',
                                800: '#3a513a',
                                900: '#1a321a'
                        },
                        success: {
                                50: '#f0fdf4',
                                100: '#dcfce7',
                                200: '#bbf7d0',
                                300: '#86efac',
                                400: '#4ade80',
                                500: '#22c55e',
                                600: '#16a34a',
                                700: '#15803d',
                                800: '#166534',
                                900: '#14532d'
                        },
                        warning: {
                                50: '#fffbeb',
                                100: '#fef3c7',
                                200: '#fde68a',
                                300: '#fcd34d',
                                400: '#fbbf24',
                                500: '#f59e0b',
                                600: '#d97706',
                                700: '#b45309',
                                800: '#92400e',
                                900: '#78350f'
                        },
                        error: {
                                50: '#fef2f2',
                                100: '#fee2e2',
                                200: '#fecaca',
                                300: '#fca5a5',
                                400: '#f87171',
                                500: '#ef4444',
                                600: '#dc2626',
                                700: '#b91c1c',
                                800: '#991b1b',
                                900: '#7f1d1d'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        }
                }
        }
  },
  plugins: [tailwindcssAnimate],
};
export default config;
