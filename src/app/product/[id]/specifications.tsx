import { router, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'tamagui';

import { useCarSpec } from '@/api/cars/use-car-spec';
import BackButton from '@/components/back-button';
import { FocusAwareStatusBar } from '@/ui';

const SpecificationsScreen = () => {
  const local = useLocalSearchParams<{ id: string }>();
  console.log('🚀 ~ SpecificationsScreen ~ local:', local);

  const { data, isPending, isError } = useCarSpec({
    //@ts-ignore
    variables: { id: local.id },
  });

  if (isPending) {
    return (
      <View alignItems="center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
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
      <Text>SpecificationsScreen</Text>
    </View>
  );
};

export default SpecificationsScreen;
