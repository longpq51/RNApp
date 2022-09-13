import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';

const GoBackBtn = props => {
  const {style} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={tw`${style} p-3`}
      onPress={() => navigation.goBack()}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        size={30}
        color={colors.rgbPrimary}
      />
    </TouchableOpacity>
  );
};

export default GoBackBtn;
