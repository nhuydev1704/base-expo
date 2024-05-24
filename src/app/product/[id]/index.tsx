import { Link, router, Stack, useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { Button, ScrollView, View } from 'tamagui';

import { useCar } from '@/api/cars/use-car';
import BackButton from '@/components/back-button';
import Compare from '@/components/product/compare';
import ImageProduct from '@/components/product/images';
import ProductInfo from '@/components/product/product-info';
import Qa from '@/components/product/qa';
import ReviewCar from '@/components/product/review';
import {
  ActivityIndicator,
  FocusAwareStatusBar,
  SafeAreaView,
  Text,
} from '@/ui';
import { Heart } from '@/ui/icons/heart';
import ParameterIcon from '@/ui/icons/parameter';

// eslint-disable-next-line max-lines-per-function
export default function ProductDetail() {
  const scrollViewRef = React.useRef(null);
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
    <View flex={1}>
      {Screen}
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        className="flex-1 p-3"
      >
        <ImageProduct
          carModelPicDtoUrl={data.detail.carModelPicDtoUrl}
          colourList={data.detail.colourList}
        />
        <ProductInfo productDetail={data.detail} />

        <Compare pros={data.detail.pros} cons={data.detail.cons} />

        <ReviewCar
          scrollViewRef={scrollViewRef}
          reviews={data.detail.reviews}
        />

        <Qa faqs={data.detail.faqs} />
      </ScrollView>
      <View flexDirection="row" justifyContent="center">
        <Link href={`/product/${data.car_id as string}/specifications`} asChild>
          <Button borderColor="#fff" themeInverse fontWeight="600" width={400}>
            <ParameterIcon color="white" />
            Thông số kỹ thuật
          </Button>
        </Link>
      </View>
      <SafeAreaView edges={['bottom']} />
    </View>
  );
}
