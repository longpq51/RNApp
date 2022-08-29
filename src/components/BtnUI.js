import {Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';

const BtnUI = props => {
  const {text} = props;

  return (
    <TouchableOpacity
      style={tw`bg-${colors.primary} items-center p-3 rounded-full`}>
      <Text style={tw`text-${colors.textColorPrimary}`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BtnUI;
