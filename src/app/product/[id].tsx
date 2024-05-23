import { router, Stack, useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { Button } from 'tamagui';

import { useCar } from '@/api/cars/use-car';
import BackButton from '@/components/back-button';
import ImageProduct from '@/components/product/images';
import ProductInfo from '@/components/product/product-info';
import { ActivityIndicator, FocusAwareStatusBar, Text, View } from '@/ui';
import { Heart } from '@/ui/icons/heart';

export default function ProductDetail() {
  const local = useLocalSearchParams<{ id: string }>();

  const { data, isPending, isError } = useCar({
    //@ts-ignore
    variables: { id: local.id },
  });

  const Screen = (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
          headerLeft: (props) => (
            <BackButton {...props} onPress={() => router.back()} title="" />
          ),
          headerRight: () => (
            <Button size="$3" circular>
              <Heart height={18} width={18} />
            </Button>
          ),
        }}
      />
      <FocusAwareStatusBar />
    </>
  );

  if (isPending) {
    return (
      <View className="flex-1 justify-center  p-3">
        {Screen}
        <ActivityIndicator />
      </View>
    );
  }
  if (isError) {
    return (
      <View className="flex-1 justify-center p-3">
        {Screen}
        <Text className="text-center">Error loading post</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-3 ">
      {Screen}
      <ImageProduct
        carModelPicDtoUrl={data.detail.carModelPicDtoUrl}
        colourList={data.detail.colourList}
      />
      <ProductInfo productDetail={data.detail} />
    </View>
  );
}
