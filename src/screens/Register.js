import {
  faArrowCircleLeft,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import BtnUI from '../components/BtnUI';
import InputItem from '../components/InputItem';

const Register = props => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView>
      <View
        style={tw`bg-${colors.primary} items-center p-10 flex flex-row justify-between`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute top-3 left-3`}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={20}
            style={tw`text-${colors.textColorPrimary}`}
          />
        </TouchableOpacity>
        <Text style={tw`font-bold text-2xl w-32 italic text-yellow-400`}>
          Bạn chưa có tài khoản?
        </Text>

        <Image source={require('../assets/logo.png')} style={tw`w-32 h-32`} />
      </View>

      <View style={tw`m-2`}>
        <InputItem
          placeholder="Tên đăng nhập"
          value={name}
          setValue={setName}
        />
        <InputItem placeholder="Email" value={email} setValue={setEmail} />
        <InputItem
          placeholder="Mật khẩu"
          value={password}
          setValue={setPassword}
        />
        {/* <InputItem
          placeholder="Xác nhận mật khẩu"
          value={confirmPassword}
          setValue={setConfirmPassword}
        /> */}

        <View style={tw`mt-10`}>
          <BtnUI text="Đăng ký" />
          <View style={tw`items-center flex flex-row justify-center mt-3`}>
            <Text>Bạn đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={tw`text-${colors.primary}`}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
