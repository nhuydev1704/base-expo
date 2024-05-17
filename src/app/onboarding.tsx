import { useRouter } from 'expo-router';
import React from 'react';
import { Button } from 'tamagui';

import { Cover } from '@/components/cover';
import { useIsFirstTime } from '@/core/hooks';
import { FocusAwareStatusBar, SafeAreaView, Text, View } from '@/ui';
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  return (
    <View className="flex h-full bg-[#2C2B34]">
      <FocusAwareStatusBar />
      <View className="w-full flex-1">
        <Cover />
      </View>
      <View className="w-4/5 justify-start px-10">
        <Text className="my-3 text-4xl font-bold text-white">
          Premium cars. Enjoy the luxury
        </Text>
        <Text className="mb-2 text-lg text-[#8E8E8E]">
          Premium and prestige car daily rental. Experience the thrill at a
          lower price
        </Text>
      </View>
      <SafeAreaView>
        <View className="mb-10 px-[40px]">
          <Button
            onPress={() => {
              setIsFirstTime(false);
              router.replace('/login');
            }}
          >
            Let's Get Started
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}
