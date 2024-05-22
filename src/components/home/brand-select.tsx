import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'tamagui';

const buttons = [
  {
    domain: 'mega',
    text: 'Mega 6/45',
  },
  {
    domain: 'power',
    text: 'Power 6/55',
  },
  {
    domain: 'max3',
    text: 'Max 3D',
  },
  {
    domain: 'keno',
    text: 'Keno',
  },
  // {
  //     domain: 'max4',
  //     text: 'Max 4D',
  // },
];
const BrandSelect = ({
  handleCallbackBrand,
  brand,
}: {
  handleCallbackBrand: (value: string) => void;
  brand: string;
}) => {
  const ref = React.useRef<FlatList>(null);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  }, [index]);

  return (
    <FlatList
      ref={ref}
      data={buttons}
      style={{ flexGrow: 0 }}
      keyExtractor={(item) => item.domain}
      contentContainerStyle={styles.containerList}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      horizontal
      renderItem={({ item, index: fIndex }) => {
        return (
          <Pressable
            onPressIn={() => {
              setIndex(fIndex);
              handleCallbackBrand(item.domain);
            }}
            style={[
              styles.btnAction,
              brand === item.domain && styles.btnActionActive,
            ]}
          >
            <Text color={brand === item.domain ? '#fff' : '#343434'}>
              {item.text}
            </Text>
          </Pressable>
        );
      }}
    />
  );
};

export default React.memo(BrandSelect);

const styles = StyleSheet.create({
  containerList: { marginBottom: 20, paddingHorizontal: 10, gap: 10 },
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#343434',
  },
  btnActionActive: {
    backgroundColor: '#343434',
  },
});
