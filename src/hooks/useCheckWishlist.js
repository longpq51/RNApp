import {useSelector} from 'react-redux';
import {wishlistSelector} from '../store/selectors';

const useCheckWishlist = item => {
  const wishlist = useSelector(wishlistSelector);
  return wishlist.find(i => i.id === item.id);
};

export default useCheckWishlist;
