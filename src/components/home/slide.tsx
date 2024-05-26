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
            backgroundColor: '#fff',
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
          uri: 'https://images.autofun.vn/file1/75700637e9c24f8883e94a84e075917e_678x290.jpg',
        }}
      />
      <Image
        height="100%"
        width="100%"
        borderRadius={28}
        testID="Hello1"
        source={{
          uri: 'https://images.autofun.vn/file1/d11d1769ef78497eb2af848face4d531_678x290.jpg',
        }}
      />
      <Image
        height="100%"
        width="100%"
        borderRadius={28}
        testID="Hello2"
        source={{
          uri: 'https://images.autofun.vn/file1/91201bbb4660407a88f3b6849f56b41a_678x290.jpg',
        }}
      />
    </Swiper>
  </View>
);
