import {faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';

const CloseBtn = props => {
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon
        icon={faClose}
        size={30}
        style={tw`text-${colors.primary}`}
      />
    </TouchableOpacity>
  );
};

export default CloseBtn;
