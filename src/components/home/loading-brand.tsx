import React from 'react';
import { FlatList } from 'react-native';
import { View } from 'tamagui';

import { Skeleton } from '@/ui/skeleton';

const LoadingBrand = () => {
  return (
    <FlatList
      scrollEnabled={false}
      style={{ marginTop: 5, marginHorizontal: 10 }}
      // horizontal
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      numColumns={5}
      renderItem={() => (
        <View
          flex={1}
          marginVertical={10}
          justifyContent="center"
          alignItems="center"
        >
          <Skeleton circle width={60} />
        </View>
      )}
      keyExtractor={(_, index) => `item-${index}`}
    />
  );
};

export default React.memo(LoadingBrand);
