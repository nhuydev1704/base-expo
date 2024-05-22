import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import BackButton from '@/components/back-button';

const Wishlist = () => {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
          headerLeft: (props) => (
            <BackButton
              {...props}
              onPress={() => router.back()}
              title="My Wishlist"
            />
          ),
        }}
      />
      <View>
        <Text>Wishlist</Text>
      </View>
    </>
  );
};

export default Wishlist;
