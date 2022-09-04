import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';

const AccountItem = props => {
  const {title, icon, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`flex flex-row items-center bg-${colors.background} p-5 flex-1 m-2 rounded-md`}>
      <FontAwesomeIcon icon={icon} style={tw`mr-2 text-${colors.primary}`} />
      <Text style={tw`text-${colors.primary}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AccountItem;
