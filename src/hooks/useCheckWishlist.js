import {useSelector} from 'react-redux';
import {wishlistAlbumSelector, wishlistSelector} from '../store/selectors';

const useCheckWishlist = item => {
  const wishlist =
    item.type !== undefined
      ? useSelector(wishlistAlbumSelector)
      : useSelector(wishlistSelector);
  return wishlist.find(i => i.id === item.id);
};

export default useCheckWishlist;
