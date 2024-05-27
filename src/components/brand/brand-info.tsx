import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import React from 'react';
import RenderHTML from 'react-native-render-html';
import { Button, Image, ScrollView, Text, View } from 'tamagui';

import type { Info } from '@/api/brands/types';
import { Modal, SafeAreaView, useModal } from '@/ui';
import IconEye from '@/ui/icons/eye';

const BrandInfo = ({ info }: { info: Info }) => {
  const modal = useModal();

  return (
    <View>
      <View justifyContent="center" alignItems="center" gap={5}>
        <Image
          source={{
            uri: info.img.src,
          }}
          height={50}
          aspectRatio="1/1"
        />
        <Text fontWeight="bold" fontSize={20}>
          {info.brandName}
        </Text>
        <Button
          icon={<IconEye height={18} width={18} />}
          size="$3"
          fontWeight="600"
          onPress={modal.present}
        >
          Xem giới thiệu
        </Button>
      </View>
      <Modal ref={modal.ref}>
        <View justifyContent="center" alignItems="center" gap={5}>
          <Image
            source={{
              uri: info.img.src,
            }}
            height={50}
            aspectRatio="1/1"
          />
          <Text fontWeight="bold" fontSize={20}>
            {info.brandName}
          </Text>
        </View>
        <ScrollView paddingHorizontal={20}>
          <RenderHTML
            ignoredDomTags={['colgroup']}
            contentWidth={WINDOW_WIDTH - 40}
            // contentWidth={width}
            source={{
              html: info.description,
            }}
            tagsStyles={{
              p: {
                marginBottom: 0,
              },
            }}
          />
          <SafeAreaView edges={['bottom']} />
        </ScrollView>
      </Modal>
    </View>
  );
};

export default React.memo(BrandInfo);
