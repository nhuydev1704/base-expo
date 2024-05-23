import { useFocusEffect, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { Button, View } from 'tamagui';

import Search from '@/components/home/search';
import { CloseIcon } from '@/ui/icons/close';
import { useSearchStore } from '@/zustand/use-search';

export default function SearchModal() {
  const router = useRouter();
  const { setUnFocus } = useSearchStore((state: any) => state);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setUnFocus();
      };
    }, [])
  );

  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  return (
    <View flex={1}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}

      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />

      <View
        alignItems="center"
        gap={15}
        flexDirection="row"
        paddingHorizontal={20}
        paddingVertical={10}
      >
        <View flex={1}>
          <Search />
        </View>

        <Button
          onPress={() => {
            router.push('../');
          }}
          size="$2"
          circular
        >
          <CloseIcon />
        </Button>
      </View>

      {/* <Link href="../">Dismiss</Link> */}
    </View>
  );
}
