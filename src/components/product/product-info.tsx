import React from 'react';
import { FlatList } from 'react-native';
import { Text, View } from 'tamagui';

import type { Detail, Spec } from '@/api/cars/car.detail.types';
import CapacityIcon from '@/ui/icons/capacity';
import CarIcon from '@/ui/icons/car';
import EnergyIcon from '@/ui/icons/energy';
import GearIcon from '@/ui/icons/gear';
import MaximumCapacity from '@/ui/icons/max-capacity';
import SegmentIcon from '@/ui/icons/segment';
import { MoneyText } from '@/util';

const DetailInfo = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: any;
}) => {
  return (
    <View
      flex={1}
      flexDirection="row"
      alignItems="center"
      gap={10}
      marginBottom={10}
    >
      {icon}

      <View gap={5} flex={1}>
        <Text fontSize={12} color="#8c8c8c">
          {title}
        </Text>
        <Text fontSize={14} wordWrap="break-word" fontWeight="600">
          {value}
        </Text>
      </View>
    </View>
  );
};

const ICONS = [
  <CarIcon />,
  <SegmentIcon />,
  <CapacityIcon />,
  <MaximumCapacity />,
  <GearIcon />,
  <EnergyIcon />,
];

const ProductInfo = ({ productDetail }: { productDetail: Detail }) => {
  return (
    <View marginTop={10} paddingHorizontal={10} gap={10}>
      <Text fontWeight="bold" fontSize={24}>
        {productDetail.carModelName}
      </Text>
      <Text fontSize={18} fontWeight="bold" color="#576B95">
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
          scrollEnabled={false}
          data={productDetail.specs}
          renderItem={({ item, index }: { item: Spec; index: number }) => {
            return (
              <DetailInfo
                key={index}
                icon={ICONS[index]}
                title={item.name}
                value={item.value}
              />
            );
          }}
          numColumns={2}
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

export default React.memo(ProductInfo);
