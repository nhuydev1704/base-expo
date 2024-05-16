import { config } from '@tamagui/config/v3';
console.log('🚀 ~ config:', config);
import { createTamagui } from 'tamagui';

export const tamaguiConfig = createTamagui(config);

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
