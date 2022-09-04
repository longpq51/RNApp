import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {colors} from '../../assets/colors';

const GoBackBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        size={30}
        color={colors.rgbPrimary}
      />
    </TouchableOpacity>
  );
};

export default GoBackBtn;
