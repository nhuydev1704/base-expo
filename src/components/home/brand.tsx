import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Button, Image, Text, View } from 'tamagui';

import { useBrands } from '@/api/brands/use-brands';
import { EmptyList } from '@/ui';

import Slide from './slide';

const Brand = () => {
  const { data, isPending, isError, refetch } = useBrands();

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
              width={35}
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
          <Text fontWeight="900" fontSize={16}>
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
        data={data}
        numColumns={5}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading />}
      />
    </View>
  );
};

export default React.memo(Brand);
