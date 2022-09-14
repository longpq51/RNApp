import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import useCheckWishlist from '../../hooks/useCheckWishlist';
import {
  addToWishlist,
  addWishlistAlbum,
  deleteFromWishlist,
  deleteWishlistAlbum,
} from '../../store/actions';

const WishlistBtn = props => {
  const {item, type} = props;
  const dispatchRedux = useDispatch();
  const dispatchAddToWishlist = data => {
    dispatchRedux(addToWishlist(data));
  };
  const dispatchDeleteFromWishlist = data => {
    dispatchRedux(deleteFromWishlist(data));
  };

  const dispatchAddWishlistAlbum = data => {
    dispatchRedux(addWishlistAlbum(data));
  };

  const dispatchDeleteWishlistAlbum = data => {
    dispatchRedux(deleteWishlistAlbum(data));
  };

  const checkWishlist = item !== undefined ? useCheckWishlist(item) : undefined;

  return (
    <TouchableOpacity
      style={tw`p-2 rounded-full bg-${
        checkWishlist !== undefined ? colors.textColorPrimary : 'black'
      }`}
      onPress={() => {
        if (type === 'album') {
          dispatchAddWishlistAlbum(item);
          checkWishlist !== undefined && dispatchDeleteWishlistAlbum(item);
        } else {
          dispatchAddToWishlist(item);
          checkWishlist !== undefined && dispatchDeleteFromWishlist(item);
        }
      }}>
      <FontAwesomeIcon icon={faHeart} size={20} style={tw`text-white`} />
    </TouchableOpacity>
  );
};

export default WishlistBtn;
