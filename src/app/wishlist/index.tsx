import { FlashList } from '@shopify/flash-list';
import { useQuery } from '@tanstack/react-query';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'tamagui';

import { client } from '@/api';
import type { ICar } from '@/api/cars/types';
import type { CarModel } from '@/api/home/types';
import BackButton from '@/components/back-button';
import ProductCard from '@/components/product/product-card';
import { getWishList } from '@/store/wish-list';
import { EmptyList } from '@/ui';
import Empty from '@/ui/icons/empty';

// eslint-disable-next-line max-lines-per-function
const Wishlist = () => {
  const wishList = getWishList();
  const wish = wishList || [];

  const { isPending, data }: any = useQuery({
    queryKey: ['wish-list', wish.length],
    queryFn: () =>
      client.get(`car/gust/wish`, {
        params: {
          ids: wish.toString(),
          limit: 99,
        },
      }),
  });

  const router = useRouter();

  const Screen = (
    <Stack.Screen
      options={{
        title: '',
        headerShadowVisible: false, // applied here
        headerBackTitleVisible: false,
        headerLeft: (props) => (
          <BackButton
            {...props}
            onPress={() => router.back()}
            title={`My Wishlist (${data?.data?.totalResults})`}
          />
        ),
      }}
    />
  );

  if (wish.length <= 0) {
    return (
      <View justifyContent="center" alignItems="center" paddingVertical={80}>
        {Screen}
        <Empty />
      </View>
    );
  }

  return (
    <>
      {Screen}
      <View flex={1}>
        {isPending ? (
          <View
            justifyContent="center"
            alignItems="center"
            paddingVertical={40}
          >
            <ActivityIndicator />
          </View>
        ) : (
          <View flex={1}>
            <FlashList
              showsVerticalScrollIndicator={false}
              keyExtractor={(car) => car.id}
              renderItem={({ item }: { item: ICar & CarModel }) => {
                return <ProductCard car={item} />;
              }}
              numColumns={2}
              estimatedItemSize={200}
              data={data?.data.results}
              removeClippedSubviews
              ListEmptyComponent={<EmptyList isLoading />}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default Wishlist;
