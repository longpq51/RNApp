import {faShare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ShareBtn = () => {
  return (
    <TouchableOpacity style={tw`items-center`}>
      <FontAwesomeIcon icon={faShare} size={20} />
      <Text>Chia sẻ</Text>
    </TouchableOpacity>
  );
};

export default ShareBtn;
