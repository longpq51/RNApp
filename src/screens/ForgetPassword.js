import {useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import BtnUI from '../components/BtnUI';
import GoBackBtn from '../components/buttons/GobackBtn';
import InputItem from '../components/InputItem';

const ForgetPassword = () => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`m-5 `}>
        <GoBackBtn />
      </View>

      <View style={tw`items-center justify-center flex-1 mb-20`}>
        <Image source={require('../assets/logo.png')} />

        <Text style={tw`text-${colors.primary} w-64 text-center mb-5`}>
          Nhập địa chỉ email của bạn để nhận mã xác nhận nhé!
        </Text>

        <View style={tw`w-3/4`}>
          <InputItem placeholder="Email" value={value} setValue={setValue} />
        </View>

        <View style={tw`w-3/4 mt-10`}>
          <BtnUI text="Gửi mã xác nhận" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
