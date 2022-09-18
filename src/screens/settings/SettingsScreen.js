import {
  faBook,
  faFingerprint,
  faInfoCircle,
  faKey,
  faRightFromBracket,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Linking,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import LogoutModal from '../../components/LogoutModal';
import SettingItem from '../../components/settings/SettingItem';
import {isShowMiniPlayerSelector} from '../../store/selectors';

const SettingsScreen = props => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const isShowMiniPlayer = useSelector(isShowMiniPlayerSelector);

  var [isEnabledLockApp, setIsEnabledLockApp] = useState(true);

  return (
    <SafeAreaView style={tw`justify-between h-full`}>
      <View>
        <View style={tw`flex-row items-center justify-between p-3`}>
          <View style={tw`flex-row items-center`}>
            <FontAwesomeIcon icon={faFingerprint} />
            <Text style={tw`ml-2`}>Mở khoá bằng vân tay</Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: colors.rgbTextColorPrimary}}
            thumbColor={isEnabledLockApp ? colors.rgbPrimary : '#767577'}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setIsEnabledLockApp(!isEnabledLockApp);
            }}
            value={isEnabledLockApp}
          />
        </View>

        <SettingItem
          icon={faBook}
          title="Điều khoản sử dụng"
          onPress={() => navigation.navigate('TermOfUse')}
        />
        <SettingItem
          icon={faShieldAlt}
          title="Chính sách bảo mật"
          onPress={() => navigation.navigate('Privacy')}
        />
        <SettingItem
          icon={faInfoCircle}
          title="Thông tin ứng dụng"
          onPress={() => navigation.navigate('InfoApp')}
        />
        <SettingItem
          icon={faKey}
          title="Đổi mật khẩu"
          onPress={() => navigation.navigate('ForgetPassword')}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://github.com/longpq51')}>
          <Text
            style={tw`w-full text-${colors.primary} text-center font-bold p-3`}>
            longpq@comartek
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row items-center bg-red-400 p-3`}
          onPress={() => setModalVisible(true)}>
          <FontAwesomeIcon icon={faRightFromBracket} color="white" />
          <Text style={tw`text-${colors.textColor} ml-2`}>Đăng xuất</Text>
        </TouchableOpacity>

        <LogoutModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
