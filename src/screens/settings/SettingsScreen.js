import {
  faBook,
  faInfoCircle,
  faRightFromBracket,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Linking,
  SafeAreaView,
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

  return (
    <SafeAreaView style={tw`justify-between h-full`}>
      <View>
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
        <SettingItem icon={faInfoCircle} title="Thông tin ứng dụng" />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://github.com/longpq51')}>
          <Text
            style={tw`w-full text-${colors.primary} text-center font-bold p-3`}>
            Design by longpq@comartek
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
