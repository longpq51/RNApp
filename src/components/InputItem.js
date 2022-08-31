import {
  faCheckCircle,
  faClose,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import useShowPassword from '../hooks/useShowPassword';
import useValidateEmail from '../hooks/validate/useValidateEmail';
import useValidatePassword from '../hooks/validate/useValidatePassword';
import {showPasswordSelector} from '../store/selectors';

const InputItem = props => {
  const {placeholder, value, setValue} = props;

  const showPassword = useShowPassword();
  const isShowPassword = useSelector(showPasswordSelector);

  let validate =
    placeholder === 'Email'
      ? useValidateEmail(value)
      : placeholder === 'Mật khẩu' && useValidatePassword(value);

  return (
    <SafeAreaView>
      <View>
        <TextInput
          value={value}
          onChangeText={e => setValue(e)}
          secureTextEntry={
            placeholder === 'Mật khẩu' && !isShowPassword ? true : false
          }
          placeholder={placeholder}
          style={tw`bg-${colors.background} rounded-md p-4 mt-3`}
        />
        {value.length > 0 && placeholder === 'Mật khẩu' && (
          <TouchableOpacity
            onPress={() => showPassword(!isShowPassword)}
            style={tw`absolute top-1/2 right-3`}>
            <FontAwesomeIcon icon={isShowPassword ? faEye : faEyeSlash} />
          </TouchableOpacity>
        )}
      </View>

      {value.length > 0 && placeholder !== undefined ? (
        <View style={tw`flex flex-row items-center my-2`}>
          <FontAwesomeIcon
            icon={validate ? faCheckCircle : faClose}
            style={tw`${validate ? 'text-green-400' : 'text-red-400'} mr-1`}
          />
          <Text style={tw`${validate ? 'text-green-400' : 'text-red-400'}`}>
            {placeholder}
            {!validate && ' không'} hợp lệ
          </Text>
        </View>
      ) : (
        <View></View>
      )}
    </SafeAreaView>
  );
};

export default InputItem;
