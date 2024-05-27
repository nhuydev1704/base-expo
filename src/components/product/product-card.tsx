import { Link } from 'expo-router';
import React from 'react';
import { Button, Text, View, XStack } from 'tamagui';

import type { ICar } from '@/api/cars/types';
import type { CarModel } from '@/api/home/types';
import { Image } from '@/ui';
import { Heart } from '@/ui/icons/heart';
import { MoneyText } from '@/util';

const ProductCard = ({ car }: { car: ICar & CarModel }) => {
  return (
    <Link href={`/product/${(car.detail?.id || car?.id) as any}/`} asChild>
      <View flex={1} padding={20} gap={10}>
        <View
          paddingTop={20}
          backgroundColor="#fff"
          borderRadius={16}
          position="relative"
        >
          <View aspectRatio="16/9">
            <Image
              className="h-full w-full"
              contentFit="cover"
              source={{
                uri: car?.listImage || car.detail.imgInfo.src,
              }}
            />
          </View>
          <Button size="$3" position="absolute" top={-20} right={0} circular>
            <Heart height={18} width={18} />
          </Button>
        </View>
        <Text fontWeight="bold" marginTop={10} fontSize={15}>
          {car?.modelName || car.detail.targetText}
        </Text>
        <XStack gap={7} alignItems="center">
          <View
            height={6}
            width={6}
            borderRadius={999}
            backgroundColor="#ffb400"
          />
          <Text fontSize={12} color="#868686">
            {car?.brandName || car.detail.variantInfo.brandName}
          </Text>
        </XStack>
        <Text fontWeight="bold" color="#576B95">
          {MoneyText({
            minPrice: car?.minPrice || car.detail?.priceInfo?.minPrice,
            maxPrice: car?.maxPrice || car.detail?.priceInfo?.maxPrice,
          })}
        </Text>
      </View>
    </Link>
  );
};

export default React.memo(ProductCard);
