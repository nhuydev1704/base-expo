import React from 'react';

import Brand from '@/components/home/brand';
import Header from '@/components/home/header';
import Product from '@/components/home/product';
import Search from '@/components/home/search';
import { FocusAwareStatusBar, SafeAreaView, ScrollView } from '@/ui';

export default function Feed() {
  return (
    <ScrollView>
      <SafeAreaView edges={['bottom']} />
      <FocusAwareStatusBar />

      <Header />

      <Search />

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
