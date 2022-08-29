import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import BtnUI from '../components/BtnUI';
import InputItem from '../components/InputItem';

const Login = props => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <View
        style={tw`bg-${colors.primary} items-center p-10 flex flex-row justify-between`}>
        <Text style={tw`font-bold text-2xl w-32 italic text-yellow-400`}>
          Bạn đã có tài khoản?
        </Text>

        <Image source={require('../assets/logo.png')} style={tw`w-32 h-32`} />
      </View>

      <View>
        <View style={tw`m-2`}>
          <InputItem placeholder="Email" value={email} setValue={setEmail} />
          <InputItem
            placeholder="Mật khẩu"
            value={password}
            setValue={setPassword}
          />
        </View>

        <View style={tw`mt-10 m-2`}>
          <BtnUI text="Đăng nhập" />
          <View style={tw`items-center flex flex-row justify-center mt-3`}>
            <Text>Bạn chưa có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={tw`text-${colors.primary}`}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
