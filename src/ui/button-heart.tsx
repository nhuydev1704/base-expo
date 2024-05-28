import React from 'react';
import { Button } from 'tamagui';

import { getWishList, setWishList } from '@/store/wish-list';

import { Heart } from './icons/heart';
import IconHeartBold from './icons/heart-bold';

const ButtonHeart = ({ carId }: { carId: any }) => {
  const [_, setRender] = React.useState(false);
  const wishList = getWishList() || [];

  return (
    <Button
      onPress={() => {
        if (getWishList().includes(carId)) {
          setWishList(getWishList().filter((item) => item != carId));
        } else {
          setWishList([...getWishList(), carId]);
        }

        setRender((prev) => !prev);
      }}
      size="$3"
      position="absolute"
      top={-20}
      right={0}
      circular
    >
      {wishList?.includes(carId) ? (
        <IconHeartBold height={22} width={22} />
      ) : (
        <Heart height={18} width={18} />
      )}
    </Button>
  );
};

export default React.memo(ButtonHeart);
