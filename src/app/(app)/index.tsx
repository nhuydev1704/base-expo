import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'tamagui';

import Brand from '@/components/home/brand';
import Header from '@/components/home/header';
import Product from '@/components/home/product';
import { FocusAwareStatusBar, ScrollView } from '@/ui';

export default function Feed() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
      {/* <SafeAreaView edges={['bottom']} /> */}
      <FocusAwareStatusBar />

      <View backgroundColor="#fff" paddingBottom={10} paddingTop={insets.top}>
        <Header />
      </View>

      {/* <View paddingHorizontal={15} paddingBottom={15}>
        <Search isOpen />
      </View> */}
      <Brand />

      <Product />

      {/* <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={300}
      /> */}
    </ScrollView>
  );
}
