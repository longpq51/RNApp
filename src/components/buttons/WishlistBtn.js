import {faHackerNewsSquare} from '@fortawesome/free-brands-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const WishlistBtn = () => {
  return (
    <TouchableOpacity style={tw`p-2`}>
      <FontAwesomeIcon icon={faHeart} size={25} />
    </TouchableOpacity>
  );
};

export default WishlistBtn;
