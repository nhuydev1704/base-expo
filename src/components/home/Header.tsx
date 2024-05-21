import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Text, View } from 'tamagui';

import { Bell } from '@/ui/icons/bell';
import { Heart } from '@/ui/icons/heart';

const returnTime = () => {
  const today = new Date();
  const curHr = today.getHours();

  if (curHr < 12) {
    return 'Good Morning';
  } else if (curHr < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};
const Header = () => {
  return (
    <View
      paddingHorizontal={20}
      paddingTop={30}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <View flexDirection="row" gap={15}>
        <Avatar circular size="$4">
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <View gap={4}>
          <Text color="#8E8E8E" fontSize={13} fontWeight="600">
            {returnTime()} 👋
          </Text>
          <Text fontSize={16}>Nguyễn Như Ý</Text>
        </View>
      </View>
      <View flexDirection="row" gap={20}>
        <TouchableOpacity>
          <Heart />
        </TouchableOpacity>

        <TouchableOpacity>
          <Bell />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(Header);
