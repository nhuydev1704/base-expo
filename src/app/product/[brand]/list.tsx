import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'tamagui';

import { useBrand } from '@/api/brands/use-brand';
import BackButton from '@/components/back-button';
import BrandInfo from '@/components/brand/brand-info';
import { FocusAwareStatusBar } from '@/ui';

const ProductListPage = () => {
  const local = useLocalSearchParams<{ brand: string }>();
  const router = useRouter();
  const brand = useBrand({
    variables: {
      id: local.brand,
    },
  });

  const Screen = (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
          headerLeft: (props) => (
            <BackButton {...props} onPress={() => router.back()} title="" />
          ),
        }}
      />
      <FocusAwareStatusBar />
    </>
  );
  if (!brand?.data) return;

  return (
    <View>
      {Screen}
      <BrandInfo info={brand.data.info} />
      <Text>ProductListPage</Text>
    </View>
  );
};

export default ProductListPage;
