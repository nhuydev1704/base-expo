import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'tamagui';

import { BackIcon } from '@/ui/icons/back';

const BackButton = (props: any) => {
  return (
    <TouchableOpacity
      className="flex-row items-center gap-2 py-2 pr-2"
      {...props}
    >
      <BackIcon />
      {props?.title && (
        <Text fontWeight="bold" fontSize={18}>
          {props?.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default BackButton;
