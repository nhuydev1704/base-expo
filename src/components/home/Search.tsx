import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Input, XStack } from 'tamagui';

import { FilterIcon } from '@/ui/icons/filter';
import { SearchIcon } from '@/ui/icons/search';
import { useSearchStore } from '@/zustand/use-search';

// eslint-disable-next-line max-lines-per-function
const Search = ({ isOpen }: { isOpen?: boolean }) => {
  const inputRef: any = React.useRef(null); // Create a reference to the input field

  const { searchState, setSearchState } = useSearchStore((state: any) => state);
  console.log('🚀 ~ Search ~ searchState:', searchState);

  const router = useRouter();

  React.useEffect(() => {
    if (isOpen || !searchState.focus) {
      inputRef.current.blur();
    }

    if (searchState.focus) {
      // router.push('/search/modal');
      inputRef.current.focus(); // Focus on the input field when searchState changes
    }
  }, [searchState.focus]); // This effect runs whenever searchState changes

  const onChange: any = (value: string) =>
    setSearchState({ ...searchState, value });

  return (
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
        ref={inputRef}
        onPressIn={() => {
          isOpen && router.push('/search/modal');
          isOpen && setSearchState({ ...searchState, focus: true });
        }}
        onChangeText={onChange}
        placeholder="Search"
        flex={1}
        borderColor="$gray12Light"
        focusStyle={{
          borderColor: '$gray12Light',
        }}
        borderWidth="$0"
        value={searchState.value}
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
  );
};

export default Search;
