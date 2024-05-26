import { router, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList } from 'react-native';
import { ScrollView, Spinner, Text, View, XStack } from 'tamagui';

import { useCarSpec } from '@/api/cars/use-car-spec';
import BackButton from '@/components/back-button';
import { FocusAwareStatusBar } from '@/ui';
import { TickIcon } from '@/ui/icons/tick';

// eslint-disable-next-line max-lines-per-function
const SpecificationsScreen = () => {
  const local = useLocalSearchParams<{ id: string }>();

  const { data, isPending } = useCarSpec({
    //@ts-ignore
    variables: { id: local.id },
  });

  const Screen = (
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
  );

  if (isPending) {
    return (
      <View alignItems="center">
        {Screen}
        <Spinner marginTop={40} />
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Screen}
      <FocusAwareStatusBar />
      <View flexDirection="row">
        <View width={140}>
          <View height={60} />
          <FlatList
            removeClippedSubviews
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

        <ScrollView
          removeClippedSubviews
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <View>
            <XStack>
              {data?.detail.modelVariants.map((v) => {
                return (
                  <View
                    key={v.id}
                    height={60}
                    width={160}
                    borderRightWidth={0}
                    borderWidth={1}
                    borderColor="#ccc"
                    padding={10}
                  >
                    <Text fontWeight="bold">{v.variantName}</Text>
                  </View>
                );
              })}
            </XStack>
            <FlatList
              horizontal
              scrollEnabled={false}
              data={data?.detail.specs}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item: specItem }) => (
                <View width={160}>
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
                        />

                        {item.attributeList.map((attribute) => {
                          // @ts-ignore
                          const value = specItem.find(
                            (spec) => spec.categoryKey === item.categoryKey
                          ).carPropertiesContrastMap[attribute.attributeKey];

                          return (
                            <View
                              backgroundColor="#f9f9f9"
                              key={attribute.id}
                              height={50}
                              justifyContent="center"
                              paddingHorizontal={10}
                              borderWidth={0.5}
                              borderColor="#ccc"
                            >
                              {value && value.includes('<font') ? (
                                <View
                                  justifyContent="center"
                                  alignItems="center"
                                >
                                  {value?.includes('#0ba753') ? (
                                    <TickIcon color="#0ba753" />
                                  ) : (
                                    <Text fontWeight="bold" color="red">
                                      X
                                    </Text>
                                  )}
                                </View>
                              ) : (
                                <Text fontSize={13}>{value}</Text>
                              )}
                            </View>
                          );
                        })}
                      </View>
                    )}
                  />
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default SpecificationsScreen;
