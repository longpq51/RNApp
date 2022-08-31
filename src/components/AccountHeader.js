import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import {images} from '../assets/images';

const AccountHeader = props => {
  return (
    <SafeAreaView>
      <View style={tw`h-20 bg-${colors.primary}`}></View>
      <Pressable
        onPress={() => alert('a')}
        style={tw`flex flex-row items-center bg-${colors.primary} p-3`}>
        <Image
          source={{uri: images.accDefault}}
          style={tw`w-16 h-16 rounded-full mr-3`}
        />
        <View>
          <Text
            style={tw`text-xl font-bold text-${colors.textColorPrimary} mb-1`}>
            Phạm Quang Long
          </Text>
          <Text
            style={tw`bg-${colors.textColorPrimary} text-center text-${colors.primary} p-2 rounded-full`}>
            Thành viên
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default AccountHeader;
