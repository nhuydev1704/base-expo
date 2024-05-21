import { SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import React from 'react';
import Swiper from 'react-native-swiper';
import { Image, View } from 'tamagui';

export default () => (
  <View aspectRatio={16 / 7} marginTop={10} width={SCREEN_WIDTH - 30}>
    <Swiper
      autoplay
      loop
      paginationStyle={{ bottom: 10 }}
      activeDot={
        <View
          style={{
            backgroundColor: '#363853',
            width: 22,
            height: 6,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
        />
      }
    >
      <Image
        height="100%"
        width="100%"
        borderRadius={28}
        testID="Hello"
        source={{
          uri: 'https://res.cloudinary.com/dxvj1wsbq/image/upload/v1716308428/Background_agyjnr.png',
        }}
      />
      <Image
        height="100%"
        width="100%"
        borderRadius={28}
        testID="Hello1"
        source={{
          uri: 'https://res.cloudinary.com/dxvj1wsbq/image/upload/v1716308428/Background_agyjnr.png',
        }}
      />
      <Image
        height="100%"
        width="100%"
        borderRadius={28}
        testID="Hello2"
        source={{
          uri: 'https://res.cloudinary.com/dxvj1wsbq/image/upload/v1716308428/Background_agyjnr.png',
        }}
      />
    </Swiper>
  </View>
);
