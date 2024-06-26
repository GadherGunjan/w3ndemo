/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    /* fontSize: {
      '14': ['14px', '1.2'],
      '16': ['16px', '1.5'],
      '18': ['18px', 'normal'],
      '20': ['20px', '1.5'],
      '24': ['24px', '1.5'],
      '32': ['32px', '52px'],
      '36': ['36px', '1.6111'],
      '48': ['48px', 'normal'],
      '52': ['52px', '1.5384'],
      '64': ['64px', 'normal'],
      '96': ['96px', 'normal'],
      '128': ['128px', 'normal'],
      '160': ['160px', 'normal'],
      '196': ['196px', 'normal'],
    }, */
    fontSize: {
      '14': ['14px', '1.5'],
      '15': ['15px', '1.5'],
      '16': ['16px', '1.5'],
      '18': ['18px', '1.5'],
      '20': ['20px', '1.8'],
      '24': ['24px', '1.5'],
      '26': ['26px', '1.5'],
      '28': ['28px', '1.5'],
      '30': ['30px', '1.5'],
      '32': ['32px', '1.62'],
      '34': ['34px', '1.62'],
      '36': ['36px', '1.61'],
      '38': ['38px', '1.61'],
      '40': ['40px', '1.6'],
      '42': ['42px', '1.6'],
      '44': ['44px', 'normal'],
      '48': ['48px', 'normal'],
      '52': ['52px', '1.53'],
      '54': ['54px', '1.53'],
      '64': ['64px', 'normal'],
      '72': ['72px', 'normal'],
      '78': ['78px', 'normal'],
      '80': ['80px', 'normal'],
      '86': ['86px', 'normal'],
      '96': ['96px', 'normal'],
      '106': ['106px', 'normal'],
      '128': ['128px', 'normal'],
      '130': ['130px', 'normal'],
      '144': ['144px', 'normal'],
      '160': ['160px', 'normal'],
      '164': ['164px', 'normal'],
      '196': ['196px', 'normal'],
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1440px",
      '3xl': "1520px",
      '4xl': "1720px",
    },
    fontFamily: {
			gilroy: ["Gilroy", "sans-serif"],
			manrope: ["Manrope", "sans-serif"],
			workSans: ["Work Sans", "sans-serif"],
      barlowSemiCondensed: ["Barlow Semi Condensed", "sans-serif"],
		},
    extend: {
      borderRadius: {
        '5': '5px',
        '10': '10px',
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
      },
      lineHeight: {
        'auto': 'normal',
        '175': '1.75',
        '155': '1.55',
        '180': '1.80',
        '150': '1.50',
        '162': '1.62',
        '161': '1.61',
        '160': '1.60',
        '153': '1.53',
      },
      boxShadow: {
        'blurEffect': 'inset 0px 39px 56px -36px rgba(255, 255, 255, 0.5), inset 0px 7px 11px -4px rgba(255, 255, 255, 0.4), inset 0px -82px 68px -64px rgba(255, 255, 255, 0.2), inset 0px 98px 100px -48px rgba(255, 255, 255, 0.25), inset 0px 4px 18px rgba(255, 255, 255, 0.3), inset 0px 1px 0px rgba(255, 255, 255, 0.2)',
      },
      spacing: {
        '30': '1.5rem',
        '32': '1.6rem',
        '20': '1rem',
      },
      gap: {
        '64': '64px',
      },
      colors: {
        bgColor : '#0D0D0E' ,
        bgSecondary :  '#121212' ,
        current : "currentColor",
        textColor : "#DFDFDF",
        textColorSecondary : "#818181" ,
        themeRed : '#FF0036',
        themeDarkRed : '#9C1A36',
        tertiary: '#4D4D4D',
        linecolor: '#262626',
        textprimary: '#E0E0E0',
        borderColor: '#252526',
        blackLight1: '#1C1C1C',
			},
      spacing: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '26': '26px',
        '30': '30px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '44': '44px',
        '48': '48px',
        '50': '50px',
        '54': '54px',
        '56': '56px',
        '60': '60px',
        '64': '64px',
        '80': '80px',
        '84': '84px',
        '88': '88px',
        '96': '96px',
        '100': '100px',
        '106': '106px',
        '116': '116px',
        '128': '128px',
        '130': '130px',
        '140': '140px',
        '144': '144px',
        '164': '164px',
        '196': '196px',
      },
      container: {
				center: true,
				padding: {
					DEFAULT: "16px",
          sm: '20px',
          md: '20px',
          lg: '30px',
          xl: "40px",
					'2xl': "60px",
					'3xl': "80px",
				},
				screens: {
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1300px",
					'2xl': "1520px",
					'3xl': "1720px",
				},
				/* screens: {
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1280px",
					'2xl': "1300px",
					'3xl': "1560px",
				}, */
			},
      padding: {
        /* '196': '196px',
        '128': '128px',
        '96': '96px',
        '80': '80px',
        '64': '64px',
        '48': '48px',
        '32': '32px',
        '30': '30px',
        '16': '16px', */
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '30': '30px',
        '32': '32px',
        '36': '36px',
        '48': '48px',
        '64': '64px',
        '60': '60px',
        '80': '80px',
        '96': '96px',
        '128': '128px',
        '164': '164px',
        '196': '196px',
        
      },
      margin: {
        /* '196': '196px',
        '128': '128px',
        '96': '96px',
        '80': '80px',
        '64': '64px',
        '48': '48px',
        '32': '32px',
        '30': '30px',
        '16': '16px', */
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '30': '30px',
        '32': '32px',
        '36': '36px',
        '48': '48px',
        '64': '64px',
        '60': '60px',
        '80': '80px',
        '96': '96px',
        '128': '128px',
        '164': '164px',
        '196': '196px',
      },
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(225deg, ${theme('colors.themeRed')}, ${theme('colors.themeDarkRed')})`,
        'gradient-light': `linear-gradient(180deg, ${theme('colors.bgSecondary')} 0%, rgba(10, 10, 10, 0.06) 100%)`,
        'gradient-extra': `linear-gradient(225deg, ${theme('colors.themeRed')} 0%, rgba(255, 0, 54, 0.0))`,
        'gradient-linear': `linear-gradient(360deg, ${theme('colors.bgSecondary')} 15.16%, rgba(18, 18, 18, 0.0) 100%)`,
        'gradient-client': `linear-gradient(180deg, rgba(10, 10, 10, 0.00) 72.92%, rgba(10, 10, 10, 0.80) 100%)`,
        'gradient-gray': `linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.00) 52.08%)`,
        'gradient-portfolio-detail' : `linear-gradient(180deg, rgba(10, 10, 10, 0.40) 0%, rgba(10, 10, 10, 0.80) 100%)`,
      }),
    },
  },
  plugins: [],
}
