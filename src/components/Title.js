import {Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';

const Title = ({title, size}) => {
  return (
    <Text
      numberOfLines={1}
      style={tw`text-${colors.primary} font-bold ${size}`}>
      {title}
    </Text>
  );
};

export default Title;
