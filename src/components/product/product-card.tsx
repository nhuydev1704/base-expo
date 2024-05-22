import React from 'react';
import { Button, Image, Text, View, XStack } from 'tamagui';

import { Heart } from '@/ui/icons/heart';

const ProductCard = () => {
  return (
    <View flex={1} padding={20} gap={10}>
      <View
        // borderColor="#f4f4f4"
        // borderWidth={0.5}
        padding={10}
        // style={shadow}
        backgroundColor="#fff"
        borderRadius={16}
        position="relative"
      >
        <View aspectRatio="16/9">
          <Image
            borderRadius={16}
            objectFit="cover"
            height="100%"
            width="100%"
            source={{
              uri: 'https://images.autofun.vn/file1/25f54e584eec46d283f27b699c3e4949_606x402.png',
            }}
          />
        </View>
        <Button size="$3" position="absolute" top={-20} right={-10} circular>
          <Heart />
        </Button>
      </View>
      <Text fontWeight="bold" fontSize={15}>
        E-Tron GT quattro
      </Text>
      <XStack gap={7} alignItems="center">
        <View
          height={6}
          width={6}
          borderRadius={999}
          backgroundColor="#ffb400"
        />
        <Text fontSize={12} color="#868686">
          Audi
        </Text>
      </XStack>
      <Text fontWeight="bold" color="#576B95">
        5,2 - 5,9 Tỷ
      </Text>
    </View>
  );
};

export default React.memo(ProductCard);
