/* eslint-disable react/no-unstable-nested-components */
import { Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { useAuth, useIsFirstTime } from '@/core';
import { Feed, Home, Settings as SettingsIcon } from '@/ui/icons';

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
        name="recommend"
        options={{
          title: 'Gợi ý',
          headerShown: false,
          tabBarIcon: ({ color }) => <Feed color={color} />,
          tabBarTestID: 'recommend-tab',
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
