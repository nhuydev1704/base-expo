import React from 'react';
import { Button, Input, View, XStack } from 'tamagui';

import { FilterIcon } from '@/ui/icons/filter';
import { SearchIcon } from '@/ui/icons/search';

const Search = () => {
  return (
    <View paddingHorizontal={15} paddingBottom={15}>
      <XStack alignItems="center">
        <Button
          size="$4"
          icon={<SearchIcon />}
          marginRight="$-4"
          borderTopLeftRadius="$4"
          borderBottomLeftRadius="$4"
          borderTopRightRadius="$0"
          borderBottomRightRadius="$0"
          borderColor="$gray12Light"
          backgroundColor="$gray3Light"
          borderWidth="$0"
          borderRightWidth="$0"
        />
        <Input
          placeholder="Search"
          flex={1}
          borderColor="$gray12Light"
          focusStyle={{
            borderColor: '$gray12Light',
          }}
          borderWidth="$0"
          // value={value}
          backgroundColor="$gray3Light"
          borderBottomLeftRadius="$4"
        />
        <Button
          size="$4"
          icon={<FilterIcon />}
          // display={value?.length ? 'flex' : 'none'}
          // onPress={() => handleClear()}
          marginLeft="$-4"
          borderTopRightRadius="$4"
          borderBottomRightRadius="$4"
          borderTopLeftRadius="$0"
          borderBottomLeftRadius="$0"
          borderColor="$gray12Light"
          backgroundColor="$gray3Light"
          borderWidth="$0"
          borderLeftWidth="$0"
          circular
        />
      </XStack>
    </View>
  );
};

export default Search;
