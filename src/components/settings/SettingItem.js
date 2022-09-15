import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';

const SettingItem = props => {
  const {icon, title, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`flex-row items-center justify-between bg-white p-3`}>
      <View style={tw`flex-row items-center`}>
        <FontAwesomeIcon icon={icon} />
        <Text style={tw`ml-2`}>{title}</Text>
      </View>
      <FontAwesomeIcon icon={faChevronRight} />
    </TouchableOpacity>
  );
};

export default SettingItem;
