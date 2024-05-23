import React from 'react';
import { TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { View } from 'tamagui';

import type {
  CarModelPicDtoUrl,
  ColourList,
} from '@/api/cars/car.detail.types';
import { Image } from '@/ui';
import { TickIcon } from '@/ui/icons/tick';

{
  /* <View flexDirection="row" paddingHorizontal={20}>
        {carImgPreviewList.map((url, index) => (
          <View key={index} flex={1} aspectRatio="16/9">
            <Image
              height="100%"
              objectFit="cover"
              width="100%"
              testID={`Hello${index}`}
              source={{
                uri: url.url,
              }}
            />
          </View>
        ))}
      </View> */
}

const dotActive = {
  backgroundColor: '#fff',
  width: 22,
  height: 6,
  borderRadius: 4,
  marginLeft: 3,
  marginRight: 3,
  marginTop: 3,
  marginBottom: 3,
};

const SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,

  elevation: 7,
};

// eslint-disable-next-line max-lines-per-function
const ImageProduct = ({
  carModelPicDtoUrl,
  colourList,
}: {
  carModelPicDtoUrl: CarModelPicDtoUrl[];
  colourList: ColourList[];
}) => {
  const [selectedColour, setSelectedColour] = React.useState<any>('');

  return (
    <View>
      <View aspectRatio={16 / 9}>
        {selectedColour ? (
          <Image
            className="h-full w-full rounded-2xl"
            contentFit="cover"
            source={{
              uri: selectedColour.image.url,
            }}
          />
        ) : (
          <Swiper
            autoplay
            loop
            paginationStyle={{ bottom: 10 }}
            activeDot={<View style={dotActive} />}
          >
            {carModelPicDtoUrl.map((url, index) => (
              <Image
                key={index}
                className="h-full w-full rounded-2xl"
                contentFit="cover"
                source={{
                  uri: url.url,
                }}
              />
            ))}
          </Swiper>
        )}
      </View>

      {colourList.length > 0 && (
        <View
          flexDirection="row"
          justifyContent="center"
          marginTop={20}
          borderRadius={24}
          gap={10}
        >
          {colourList.map((colour) => (
            <TouchableOpacity
              onPress={() =>
                JSON.stringify(colour) === JSON.stringify(selectedColour)
                  ? setSelectedColour('')
                  : setSelectedColour(colour)
              }
              key={colour.code}
            >
              <View flexDirection="row" justifyContent="center" gap={5}>
                <View
                  style={SHADOW}
                  height={24}
                  width={24}
                  borderRadius={999}
                  backgroundColor={colour.code}
                  justifyContent="center"
                  alignItems="center"
                >
                  {JSON.stringify(colour) ===
                    JSON.stringify(selectedColour) && <TickIcon color="#ccc" />}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default React.memo(ImageProduct);
