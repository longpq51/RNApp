import {
  faCheckCircle,
  faCircleXmark,
  faClose,
  faEye,
  faEyeSlash,
  faPlugCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect} from 'react';
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
import useSearch from '../hooks/useSearch';
import useSearchArtist from '../hooks/useSearchArtist';
import useShowPassword from '../hooks/useShowPassword';
import useValidateEmail from '../hooks/validate/useValidateEmail';
import useValidatePassword from '../hooks/validate/useValidatePassword';
import {showPasswordSelector} from '../store/selectors';

const InputItem = props => {
  const {placeholder, value, setValue, fn} = props;

  const showPassword = useShowPassword();
  const isShowPassword = useSelector(showPasswordSelector);

  let validate =
    placeholder === 'Email'
      ? useValidateEmail(value)
      : placeholder === 'Mật khẩu' && useValidatePassword(value);

  return (
    <SafeAreaView>
      <View>
        {value.length > 0 && placeholder === 'Nhập từ khoá tìm kiếm...' && (
          <TouchableOpacity
            style={tw`absolute z-10 right-3 top-8`}
            onPress={() => setValue('')}>
            <FontAwesomeIcon icon={faCircleXmark} size={20} />
          </TouchableOpacity>
        )}
        <TextInput
          keyboardType={placeholder === 'phone' ? 'number-pad' : 'default'}
          value={value}
          onChangeText={e => {
            setValue(e);
            if (placeholder === 'Nhập từ khoá tìm kiếm...') {
              fn(value);
            }
          }}
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

      {value.length > 0 &&
      placeholder !== 'phone' &&
      placeholder !== 'Nhập từ khoá tìm kiếm...' &&
      placeholder !== undefined &&
      placeholder !== 'Tên Playlist' ? (
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
