import {Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import GoBackBtn from './buttons/GobackBtn';

const HeaderAccountStack = props => {
  const {title} = props;

  return (
    <View style={tw`flex-row items-center p-3 py-5`}>
      <GoBackBtn />
      <Text style={tw`text-xl ml-3 font-bold text-${colors.primary} uppercase`}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderAccountStack;
