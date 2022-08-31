import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import useOnPress from '../hooks/useOnPress';

const Header = props => {
  const {title, icon, logo} = props;

  const onPress = useOnPress();

  return (
    <SafeAreaView
      style={[
        tw`p-3 bg-${colors.primary} rounded-full m-2 flex flex-row justify-between items-center`,
      ]}>
      {logo !== undefined ? (
        <View style={tw`flex flex-row justify-center`}>
          <Image source={require('../assets/logo.png')} style={tw`w-8 h-8`} />
          <Text style={tw`text-${colors.textColorPrimary} text-xl`}>yarn</Text>
        </View>
      ) : (
        <Text style={tw`font-bold text-xl text-${colors.textColorPrimary}`}>
          {title}
        </Text>
      )}
      <FlatList
        contentContainerStyle={[tw`items-end self-end`]}
        data={icon}
        keyExtractor={item => item.iconName}
        renderItem={item => (
          <TouchableOpacity onPress={() => onPress(item.item.iconName)}>
            <FontAwesomeIcon
              icon={item.item}
              style={tw`text-${colors.textColorPrimary}`}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Header;
