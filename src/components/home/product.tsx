import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Text, View } from 'tamagui';

import type { ICar } from '@/api/cars/types';
import type { CarModel, RecommendCategoryCar } from '@/api/home/types';
import { useHome } from '@/api/home/use-home';
import { EmptyList } from '@/ui';

import ProductCard from '../product/product-card';
import BrandSelect from './brand-select';

const Product = () => {
  const [brand, setBrand] = React.useState('Popular Car');

  const { data }: any = useHome();
  const recommend_category_cars = data?.recommend_category_cars || [];

  const handleCallbackBrand = React.useCallback((_brand: string) => {
    setBrand(_brand);
  }, []);

  return (
    <View minHeight={500}>
      <View
        paddingHorizontal={16}
        marginVertical={18}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontWeight="bold" fontSize={18}>
          Nổi bật
        </Text>
        {/* <TouchableOpacity>
          <Text fontWeight="normal">Xem thêm</Text>
        </TouchableOpacity> */}
      </View>
      {/* {[...new Array(10)].map((_, index) => {
        return <ProductCard key={index} />;
      })} */}
      <BrandSelect
        categories={recommend_category_cars.map(
          (item: RecommendCategoryCar) => item.category
        )}
        handleCallbackBrand={handleCallbackBrand}
      />

      <FlashList
        scrollEnabled={false}
        renderItem={({
          item,
          index,
        }: {
          item: ICar & CarModel;
          index: number;
        }) => {
          return <ProductCard car={item} key={index} />;
        }}
        numColumns={2}
        estimatedItemSize={200}
        data={recommend_category_cars
          .find((item: RecommendCategoryCar) => item.category === brand)
          ?.carModels?.slice(0, 10)}
        removeClippedSubviews
        ListEmptyComponent={
          <EmptyList
            isLoading

            // loading={<LoadingBrand />}
          />
        }
      />
    </View>
  );
};

export default React.memo(Product);
