import React from 'react';
import { Input, View } from 'tamagui';

const SearchBrand = ({ onChange }: { onChange: any }) => {
  const [search, setSearch] = React.useState('');

  return (
    <View>
      <Input
        onChangeText={(text) => {
          setSearch(text);
          onChange(text);
        }}
        placeholder="Tìm kiếm ..."
        borderColor="$gray12Light"
        focusStyle={{
          borderColor: '$gray12Light',
        }}
        borderWidth="$0"
        value={search}
        // backgroundColor="$gray3Light"
        borderBottomLeftRadius="$4"
      />
    </View>
  );
};

export default React.memo(SearchBrand);
