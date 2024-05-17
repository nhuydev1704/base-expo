import * as React from 'react';
import { Image } from 'tamagui';

// TODO: should be updated to simple images
export const Cover = () => (
  <Image
    source={{
      uri: require('assets/onboard.png'),
    }}
    objectFit="cover"
    style={{ height: '100%', width: '100%' }}
  />
);
