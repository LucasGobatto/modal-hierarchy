import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material' {
  interface TypographyPropsVariantOverrides {
    label: true;
  }
}

const typography: (palette: Palette) => TypographyOptions = () => ({
  allVariants: {
    fontFamily: 'Inter, sans-serif',
  },
  variantMapping: {
    label: 'p',
  },
  body1: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
  },
  body2: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: '16px',
  },
  h1: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '24px',
  },
  h4: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '36px',
    letterSpacing: -1.2,
  },
  h5: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '28px',
    letterSpacing: -1,
  },
  h6: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: -0.8,
  },
  label: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '20px',
  },
});

export default typography;
