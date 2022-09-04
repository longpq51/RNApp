import {faForwardStep} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';

const NextBtn = props => {
  const {onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`p-3 rounded-full bg-${colors.background} pl-10 pr-5 -ml-10`}>
      <FontAwesomeIcon icon={faForwardStep} size={30} />
    </TouchableOpacity>
  );
};

export default NextBtn;
