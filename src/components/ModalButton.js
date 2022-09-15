import {Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ModalButton = props => {
  var {onPress, text, color, textColor} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`p-3 bg-${color} m-2 rounded-lg items-center`}>
      <Text style={tw`text-${textColor} text-lg`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ModalButton;
