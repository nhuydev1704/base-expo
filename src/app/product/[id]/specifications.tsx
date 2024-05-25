import { router, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList } from 'react-native';
import { ScrollView, Text, View } from 'tamagui';

import { useCarSpec } from '@/api/cars/use-car-spec';
import BackButton from '@/components/back-button';
import { FocusAwareStatusBar } from '@/ui';

// eslint-disable-next-line max-lines-per-function
const SpecificationsScreen = () => {
  const local = useLocalSearchParams<{ id: string }>();
  console.log('🚀 ~ SpecificationsScreen ~ local:', local);

  const { data, isPending, isError } = useCarSpec({
    //@ts-ignore
    variables: { id: local.id },
  });
  console.log('🚀 ~ SpecificationsScreen ~ data:', data);

  if (isPending) {
    return (
      <View alignItems="center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack.Screen
        options={{
          title: 'Thông số kỹ thuật',
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
          headerLeft: (props) => (
            <BackButton {...props} onPress={() => router.back()} title="" />
          ),
        }}
      />
      <FocusAwareStatusBar />
      <View>
        <View flexDirection="row">
          <View width={140} />
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {data?.detail.modelVariants.map((v) => {
              return (
                <View
                  key={v.id}
                  width={170}
                  borderRightWidth={0}
                  borderWidth={1}
                  borderColor="#ccc"
                  padding={10}
                >
                  <Text fontWeight="bold">{v.variantName}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View flexDirection="row">
          <View width={140}>
            <FlatList
              scrollEnabled={false}
              data={data?.detail.catalog}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <View
                    height={40}
                    paddingHorizontal={10}
                    justifyContent="center"
                  >
                    <Text fontWeight="bold">{item.categoryName}</Text>
                  </View>

                  <View>
                    {item.attributeList.map((attribute) => (
                      <View
                        key={attribute.id}
                        height={50}
                        justifyContent="center"
                        paddingHorizontal={10}
                        borderWidth={0.5}
                        borderColor="#ccc"
                      >
                        <Text fontSize={13}>{attribute.attributeName}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SpecificationsScreen;
