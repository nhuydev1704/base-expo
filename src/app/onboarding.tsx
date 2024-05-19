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
      <View className="justify-start px-10">
        <Text className="mb-6 text-4xl font-bold text-white">
          Chọn Xe Thông Minh, Lái Xe Tự Tin
        </Text>
        <Text className="mb-2 text-lg text-[#8E8E8E]">
          Ứng dụng toàn diện cho việc tìm kiếm và xem xét xe máy và ô tô. Đánh
          giá chi tiết, hình ảnh chân thực và thông tin mới nhất về các dòng xe
          sẽ giúp bạn lựa chọn chiếc xe hoàn hảo.
        </Text>
      </View>
      <SafeAreaView>
        <View className="mb-10 px-[40px]">
          <Button
            onPress={() => {
              setIsFirstTime(false);
              router.replace('/');
            }}
          >
            Bắt đầu ngay
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}
