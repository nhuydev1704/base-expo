import React from 'react';
import { FlatList } from 'react-native';
import { Text, View } from 'tamagui';

import type { Detail, Spec } from '@/api/cars/car.detail.types';
import { MoneyText } from '@/util';

const DetailInfo = ({ title, value }: { title: string; value: string }) => {
  return (
    <View gap={5} flex={1} marginBottom={8}>
      <Text fontSize={10} color="#8c8c8c">
        {title}
      </Text>
      <Text>{value}</Text>
    </View>
  );
};

const ProductInfo = ({ productDetail }: { productDetail: Detail }) => {
  return (
    <View marginTop={20} paddingHorizontal={10} gap={10}>
      <Text fontWeight="bold" fontSize={20}>
        {productDetail.carModelName}
      </Text>
      <Text fontWeight="bold" color="#576B95">
        {MoneyText({
          minPrice: productDetail?.minPrice,
          maxPrice: productDetail?.maxPrice,
        })}
      </Text>
      <View marginTop={10}>
        {/* <Text fontSize={14} color="#212121" fontWeight="bold">
          Thông số kỹ thuật {productDetail.carModelName}
        </Text> */}

        <FlatList
          data={productDetail.specs}
          renderItem={({ item }: { item: Spec; index: number }) => {
            return (
              <DetailInfo
                key={item.code}
                title={item.name}
                value={item.value}
              />
            );
          }}
          numColumns={3}
        />

        <View>
          {/* {.map((spec) => (
            <DetailInfo key={spec.code} title={spec.name} value={spec.value} />
          ))} */}
        </View>
      </View>
    </View>
  );
};

export default ProductInfo;
