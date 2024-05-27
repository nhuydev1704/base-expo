import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView } from 'tamagui';

import { useBrand } from '@/api/brands/use-brand';
import BackButton from '@/components/back-button';
import BrandInfo from '@/components/brand/brand-info';
import CarList from '@/components/brand/car-list';
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
    <ScrollView stickyHeaderIndices={[1]}>
      {Screen}
      <BrandInfo info={brand.data.info} />
      <CarList
        brandId={local.brand}
        name={brand.data.info.brandName}
        models={brand.data.models}
      />
    </ScrollView>
  );
};

export default ProductListPage;
