import { getItem, removeItem, setItem } from '@/core/storage';

const WISH = 'wish-list';

export type WishType = string[];

export const getWishList = () => getItem<WishType>(WISH);
export const removeWishList = () => removeItem(WISH);
export const setWishList = (value: WishType) => setItem<WishType>(WISH, value);
