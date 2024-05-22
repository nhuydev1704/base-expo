import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Button, Image, Text, View } from 'tamagui';

import { useBrands } from '@/api/brands/use-brands';
import { EmptyList } from '@/ui';

import LoadingBrand from './loading-brand';
import Slide from './slide';

const BRAND_HOME = [
  'Toyota',
  'Hyundai',
  'Vinfast',
  // 'Kia',
  'Ford',
  'Mazda',
  'Honda',
  'Mitsubishi',
  'Peugeot',
  'MG',
];

// eslint-disable-next-line max-lines-per-function
const Brand = () => {
  const { data, refetch } = useBrands();
  const brands = [
    ...(data
      ?.filter((item: any) => BRAND_HOME.includes(item.alt))
      ?.sort((a: any, b: any) => {
        return BRAND_HOME.indexOf(a.alt) - BRAND_HOME.indexOf(b.alt);
      }) || []),
    {
      src: require('assets/more.png'),
      alt: 'Xem thêm',
    },
  ];

  const renderItem = React.useCallback(
    ({ item }: { item: any }) => (
      <View
        flexDirection="row"
        flex={1}
        justifyContent="center"
        alignItems="center"
        marginVertical={10}
      >
        <View alignItems="center">
          <Button circular size="$5">
            <Image
              objectFit="cover"
              // tintColor="#5B5B5B"
              aspectRatio={1 / 1}
              width={typeof item.src === 'string' ? 35 : 24}
              source={{
                uri: item.src,
              }}
            />
          </Button>
          <Text marginTop={10} color="#5B5B5B" textAlign="center" fontSize={12}>
            {item.alt}
          </Text>
        </View>
      </View>
    ),
    []
  );

  return (
    <View>
      <View paddingHorizontal={15} gap={10} paddingVertical={6}>
        <View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontWeight="bold" fontSize={16}>
            Special Offers
          </Text>
          <TouchableOpacity onPress={() => refetch()}>
            <Text fontWeight="normal">See All</Text>
          </TouchableOpacity>
        </View>

        <Slide />
      </View>
      <FlatList
        scrollEnabled={false}
        style={{ marginTop: 5 }}
        // horizontal
        data={brands}
        numColumns={5}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading loading={<LoadingBrand />} />}
      />
    </View>
  );
};

export default React.memo(Brand);
