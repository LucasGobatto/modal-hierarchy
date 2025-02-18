import { PaletteColorOptions, PaletteOptions } from '@mui/material';

declare module '@mui/material' {
  // Add custom shades to the palette. No type side effects because Color is already optional on MUI.
  interface Color {
    25: string;
  }
}

const primaryColorOptions = {
  25: '#F8FBFB',
  50: '#F2F8F8',
  100: '#C2DBDE',
  200: '#91BFC4',
  300: '#61A3A9',
  400: '#30878F',
  500: '#006B75',
  600: '#00575F',
  700: '#004249',
};

const palette: PaletteOptions = {
  // 'Primary' on Figma
  primary: primaryColorOptions,
  // 'Salmon' on Figma
  secondary: {
    50: '#FFFAF8',
    100: '#FEE7DF',
    200: '#FDD4C6',
    300: '#FCC2AD',
    500: '#FA9C7A',
    600: '#CB7E63',
    // MUI uses different shades for secondary, so let's have fallback values:
    light: '#FEE7DF',
    main: '#FA9C7A',
    dark: '#CB7E63',
  } as PaletteColorOptions,
  // 'Primary' on Figma
  success: primaryColorOptions,
  // 'Red' on Figma
  error: {
    25: '#FEFBFB',
    50: '#FEF5F5',
    100: '#FACECE',
    200: '#F7A7A7',
    300: '#F38080',
    400: '#F05959',
    500: '#EC3232',
    600: '#BF2828',
    900: '#A32020',
  },
  // 'Neutral' on Figma
  grey: {
    25: '#F8FAFC',
    50: '#F1F5F9',
    100: '#E2E8F0',
    200: '#CBD5E1',
    300: '#94A3B8',
    400: '#64748B',
    500: '#475569',
    600: '#334155',
    900: '#020617',
  },
  // 'Feedback/Warning' on Figma
  warning: {
    200: '#FFB8001A',
    500: '#FFB800',
  },
} as PaletteOptions; // Casting needed while we have overrides at /components/theme/index.ts

export default palette;
