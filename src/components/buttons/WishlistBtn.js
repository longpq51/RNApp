import {faHackerNewsSquare} from '@fortawesome/free-brands-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import useCheckWishlist from '../../hooks/useCheckWishlist';
import {addToWishlist, deleteFromWishlist} from '../../store/actions';

const WishlistBtn = props => {
  const {item} = props;
  const dispatchRedux = useDispatch();
  const dispatchAddToWishlist = data => {
    dispatchRedux(addToWishlist(data));
  };
  const dispatchDeleteFromWishlist = data => {
    dispatchRedux(deleteFromWishlist(data));
  };

  const checkWishlist = item !== undefined ? useCheckWishlist(item) : undefined;

  return (
    <TouchableOpacity
      style={tw`p-2`}
      onPress={() => {
        console.log(item);
        dispatchAddToWishlist(item);
        checkWishlist !== undefined && dispatchDeleteFromWishlist(item);
      }}>
      <FontAwesomeIcon
        icon={faHeart}
        size={25}
        style={tw`text-${
          checkWishlist !== undefined ? colors.textColorPrimary : 'black'
        }`}
      />
    </TouchableOpacity>
  );
};

export default WishlistBtn;
