import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'tamagui';

const BrandSelect = ({
  handleCallbackBrand,
  categories,
}: {
  handleCallbackBrand: (value: string) => void;
  categories: string[];
}) => {
  const ref = React.useRef<FlatList>(null);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (categories.length === 0) return;

    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  }, [index, categories.length]);

  return (
    <FlatList
      ref={ref}
      data={categories}
      style={{ flexGrow: 0 }}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.containerList}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      horizontal
      removeClippedSubviews
      windowSize={5}
      initialNumToRender={5} // render 10 items initially
      maxToRenderPerBatch={5} // render 5 items per batch
      updateCellsBatchingPeriod={30} // time period between batch renders
      renderItem={({ item, index: fIndex }) => {
        return (
          <Pressable
            onPress={() => {
              setIndex(fIndex);
              handleCallbackBrand(item);
            }}
            style={[
              styles.btnAction,
              index === fIndex && styles.btnActionActive,
            ]}
          >
            <Text color={index === fIndex ? '#fff' : '#343434'}>{item}</Text>
          </Pressable>
        );
      }}
    />
  );
};

export default React.memo(BrandSelect);

const styles = StyleSheet.create({
  containerList: { marginBottom: 20, gap: 10, paddingHorizontal: 15 },
  titleLive: {
    paddingLeft: 16,
  },
  groupAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  btnAction: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#343434',
  },
  btnActionActive: {
    backgroundColor: '#343434',
  },
});
