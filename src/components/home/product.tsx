import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'tamagui';

import ProductCard from '../product/product-card';
import BrandSelect from './brand-select';

const Product = () => {
  const [brand, setBrand] = React.useState('mega');

  const handleCallbackBrand = React.useCallback((_brand) => {
    setBrand(_brand);
  }, []);

  return (
    <View minHeight={500} paddingHorizontal={10}>
      <View
        marginVertical={18}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontWeight="bold" fontSize={16}>
          Top Cars
        </Text>
        <TouchableOpacity>
          <Text fontWeight="normal">See All</Text>
        </TouchableOpacity>
      </View>
      {/* {[...new Array(10)].map((_, index) => {
        return <ProductCard key={index} />;
      })} */}
      <BrandSelect handleCallbackBrand={handleCallbackBrand} brand={brand} />

      <FlashList
        scrollEnabled={false}
        renderItem={({ item, index }) => {
          return <ProductCard key={index} />;
        }}
        numColumns={2}
        estimatedItemSize={200}
        data={[...new Array(10)]}
      />
    </View>
  );
};

export default Product;
