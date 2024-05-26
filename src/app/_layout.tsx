import { useMMKVDevTools } from '@dev-plugins/react-native-mmkv';
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useNavigationContainerRef } from 'expo-router';
import { LogBox, StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider } from 'tamagui';

import { APIProvider } from '@/api';
import { hydrateAuth, loadSelectedTheme } from '@/core';
import { useThemeConfig } from '@/core/use-theme-config';

export { ErrorBoundary } from 'expo-router';

// Import  global CSS file
import '../../global.css';

import React from 'react';
import tamaguiConfig from 'tamagui.config';

LogBox.ignoreLogs([/^Cannot update a component/]);

export const unstable_settings = {
  initialRouteName: '(app)',
};

hydrateAuth();
loadSelectedTheme();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFonts({
    QuicksandLight: require('assets/fonts/Quicksand-Light.ttf'),
    QuicksandSemiBold: require('assets/fonts/Quicksand-SemiBold.ttf'),
    Quicksand: require('assets/fonts/Quicksand-Regular.ttf'),
    QuicksandBold: require('assets/fonts/Quicksand-Bold.ttf'),
  });

  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);
  useMMKVDevTools();
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen
          name="search/modal"
          options={{
            // Set the presentation mode to search/modal for our modal route.
            presentation: 'modal',
            headerShown: false,
          }}
        />
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();

  return (
    <GestureHandlerRootView
      style={styles.container}
      className={theme.dark ? `dark` : undefined}
    >
      <TamaguiProvider
        config={tamaguiConfig}
        defaultTheme={theme.dark ? 'dark' : 'light'}
      >
        <ThemeProvider value={theme}>
          <APIProvider>
            <BottomSheetModalProvider>
              {children}
              <FlashMessage position="top" />
            </BottomSheetModalProvider>
          </APIProvider>
        </ThemeProvider>
      </TamaguiProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
