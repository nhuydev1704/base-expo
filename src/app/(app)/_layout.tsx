/* eslint-disable react/no-unstable-nested-components */
import { Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { useAuth, useIsFirstTime } from '@/core';
import { Home, Settings as SettingsIcon } from '@/ui/icons';
import CarTab from '@/ui/icons/car-tab';

export default function TabLayout() {
  const status = useAuth.use.status();

  const [isFirstTime] = useIsFirstTime();

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }
  // if (status === 'signOut') {
  //   return <Redirect href="/login" />;
  // }
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
          tabBarLabel: 'Trang chủ',
          headerShown: false,
          tabBarTestID: 'feed-tab',
        }}
      />
      {/* <Tabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
          tabBarLabel: 'My Wishlist',
          title: 'Style',
          tabBarTestID: 'wishlist-tab',
        }}
      /> */}

      <Tabs.Screen
        name="car"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <CarTab color={color} />,
          tabBarTestID: 'car-tab',
          title: '',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          tabBarTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}

// const CreateNewPostLink = () => {
//   return (
//     <Link href="/feed/add-post" asChild>
//       <Pressable>
//         <Text className="px-3 text-primary-300">Create</Text>
//       </Pressable>
//     </Link>
//   );
// };
