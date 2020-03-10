import Typography from "typography"

const typography = new Typography({
  baseFontSize: "22px",
  baseLineHeight: 1.4,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'EB Garamond',
      styles: [
        '300',
        '300i',
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: [
    "EB Garamond",
    "Garamond",
    "serif",
  ],

  bodyFontFamily: [
    "EB Garamond",
    "Garamond",
    "serif",
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      fontSize: '6em',
      fontWeight: '300',
      letterSpacing: '-.05em'
    },
    'h3': {
      fontWeight: 500
    }
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
