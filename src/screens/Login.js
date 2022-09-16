import {StackActions, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import BtnUI from '../components/BtnUI';
import InputItem from '../components/InputItem';
import useValidateEmail from '../hooks/validate/useValidateEmail';
import useValidatePassword from '../hooks/validate/useValidatePassword';
import Toast from 'react-native-toast-message';
import useGetToken from '../hooks/spotify/useGetToken';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TouchIdBtn from '../components/buttons/TouchIdBtn';

const Login = props => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = useValidateEmail(email);
  const validatePassword = useValidatePassword(password);

  const {token, getToken} = useGetToken();

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

        <View style={tw`flex-row mb-5 items-center justify-between mx-3`}>
          <TouchIdBtn />

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={tw`text-${colors.primary}`}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`mt-10 m-2`}>
          <BtnUI
            text="Đăng nhập"
            onPress={() => {
              if (validateEmail && validatePassword) {
                navigation.dispatch(StackActions.replace('Tabbar'));
                getToken();
                AsyncStorage.getItem('token').then(res => console.log(res));
              } else
                Toast.show({
                  type: 'error',
                  text1: 'Mật khẩu hoặc email không hợp lệ',
                  text2: 'Kiểm tra lại thông tin đăng nhập nhé! 👋',
                });
            }}
          />
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
