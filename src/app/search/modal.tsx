import { StatusBar } from 'expo-status-bar';
import { View } from 'tamagui';

import Search from '@/components/home/search';

export default function SearchModal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  return (
    <View flex={1}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}

      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />

      <Search />
      {/* <Link href="../">Dismiss</Link> */}
    </View>
  );
}
