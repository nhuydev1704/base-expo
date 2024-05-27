import { Link } from 'expo-router';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AlphabetList } from 'react-native-section-alphabet-list';
import { Text, useDebounceValue, View } from 'tamagui';

import { useBrands } from '@/api/brands/use-brands';
import SearchBrand from '@/components/car/search';
import { FocusAwareStatusBar, Image, SafeAreaView } from '@/ui';

// eslint-disable-next-line max-lines-per-function
export default function Recommend() {
  const [search, setSearch] = React.useState('');

  const debounceSearch = useDebounceValue(search, 300);

  const { data } = useBrands();
  const dataRender = data?.map((item: any) => ({
    key: item.id,
    value: item.alt,
    src: item.src,
    id: item.id,
  }));

  const onChange = React.useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <>
      <FocusAwareStatusBar />
      {/* <ScrollView className="px-4"> */}
      <SafeAreaView edges={['top']} className="flex-1">
        <View paddingHorizontal={10} flex={1} marginBottom={60}>
          <SearchBrand onChange={onChange} />
        </View>
        <AlphabetList
          // scrollEnabled={false}
          data={
            dataRender?.filter((car) => {
              // search for value
              if (debounceSearch) {
                return car.value.toLowerCase().includes(search.toLowerCase());
              }
              return true;
            }) as any
          }
          renderCustomItem={(item: any) => (
            <Link href={`/product/${item.id}/list`} asChild>
              <TouchableOpacity>
                <View
                  flexDirection="row"
                  gap={10}
                  alignItems="center"
                  padding={10}
                >
                  <Image
                    style={{ height: 40, aspectRatio: '1/1' }}
                    source={{
                      uri: item.src,
                    }}
                  />
                  <Text style={styles.listItemLabel}>{item.value}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          )}
          renderCustomSectionHeader={(section) => (
            <View
              backgroundColor="#f1f1f1"
              paddingHorizontal={15}
              paddingVertical={6}
            >
              <Text color="black" fontWeight="bold">
                {section.title}
              </Text>
            </View>
          )}
          indexLetterStyle={{
            color: 'black',
            fontSize: 12,
          }}
          maxToRenderPerBatch={20}
          windowSize={10}
          removeClippedSubviews
          indexContainerStyle={styles.indexContainerStyle}
          letterListContainerStyle={styles.letterListContainerStyle}
        />
      </SafeAreaView>
      {/* </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  listItemLabel: {
    color: '#000',
    fontSize: 14,
  },

  letterListContainerStyle: {
    backgroundColor: '#fff',
    height: 'auto',
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    overflow: 'hidden',
  },
  indexContainerStyle: {
    width: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
