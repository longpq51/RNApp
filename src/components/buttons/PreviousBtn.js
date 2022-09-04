import {faBackwardStep} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';

const PreviousBtn = props => {
  const {onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`bg-${colors.background} p-3 rounded-full pr-10 pl-5 -mr-10`}>
      <FontAwesomeIcon icon={faBackwardStep} size={30} />
    </TouchableOpacity>
  );
};

export default PreviousBtn;
