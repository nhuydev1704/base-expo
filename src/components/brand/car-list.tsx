import { FlashList } from '@shopify/flash-list';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Text, View } from 'tamagui';

import { client } from '@/api';
import type { ICar } from '@/api/cars/types';
import type { CarModel } from '@/api/home/types';
import { ActivityIndicator, EmptyList } from '@/ui';

import ProductCard from '../product/product-card';
import CarOption from './car-option';

const CarList = ({
  models,
  name,
  brandId,
}: {
  models: string[];
  name: string;
  brandId: string;
}) => {
  const [model, setModel] = React.useState('');
  const { isPending, data }: any = useQuery({
    queryKey: ['car-list', model],
    queryFn: () =>
      client.get(`car/list/${brandId}`, {
        params: {
          detail_extraInfo_bodyType: !model || model === 'All' ? null : model,
        },
      }),
  });

  return (
    <View paddingBottom={15} paddingTop={5} paddingHorizontal={10} gap={15}>
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={16} fontWeight="bold">
          Xe Ô tô {name}
        </Text>
        <Text fontSize={12} color="#757575">
          {data?.data?.totalResults} kết quả
        </Text>
      </View>
      <CarOption
        categories={models.filter(Boolean)}
        handleCallbackBrand={(_value) => {
          setModel(_value);
        }}
      />
      {isPending ? (
        <View justifyContent="center" alignItems="center" paddingVertical={40}>
          <ActivityIndicator />
        </View>
      ) : (
        <View minHeight={400}>
          <FlashList
            scrollEnabled={false}
            keyExtractor={(car) => car.id}
            renderItem={({ item }: { item: ICar & CarModel }) => {
              return <ProductCard car={item} />;
            }}
            numColumns={2}
            estimatedItemSize={200}
            data={data?.data.results}
            removeClippedSubviews
            ListEmptyComponent={
              <EmptyList
                isLoading

                // loading={<LoadingBrand />}
              />
            }
          />
        </View>
      )}
    </View>
  );
};

export default React.memo(CarList);
