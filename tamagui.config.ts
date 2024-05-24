import { config } from '@tamagui/config/v3';
import { createFont, createTamagui } from 'tamagui';

const QuicksandFont = createFont({
  ...config.fonts.heading,
  fontFamily: 'Quicksand',
  // for native only, alternate family based on weight/style
  face: {
    normal: {
      normal: 'Quicksand',
    },
    // pass in weights as keys
    400: { normal: 'QuicksandLight' },
    500: { normal: 'Quicksand' },
    600: { normal: 'QuicksandSemiBold' },
    700: { normal: 'QuicksandSemiBold' },
    800: { normal: 'QuicksandSemiBold' },
    900: { normal: 'QuicksandBold' },
    bold: {
      normal: 'QuicksandBold',
    },
  },
});

const QuicksandFontBody = createFont({
  ...config.fonts.body,
  fontFamily: 'Quicksand',
  // for native only, alternate family based on weight/style
  face: {
    normal: {
      normal: 'Quicksand',
    },
    // pass in weights as keys
    400: { normal: 'QuicksandLight' },
    500: { normal: 'Quicksand' },
    600: { normal: 'QuicksandSemiBold' },
    700: { normal: 'QuicksandSemiBold' },
    800: { normal: 'QuicksandSemiBold' },
    900: { normal: 'QuicksandBold' },
    bold: {
      normal: 'QuicksandBold',
    },
  },
});

export const tamaguiConfig = createTamagui({
  ...config,
  fonts: {
    heading: QuicksandFont,
    body: QuicksandFontBody,
  },
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
