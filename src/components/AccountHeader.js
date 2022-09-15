import {useEffect} from 'react';
import {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import {images} from '../assets/images';
import useUserInfo from '../hooks/useUserInfo';
import {userInfoSelector} from '../store/selectors';
import UpdateAvatarModal from './UpdateAvatarModal';

const AccountHeader = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const {userInfo, dispatchSetUserInfo} = useUserInfo();

  return (
    <SafeAreaView>
      <UpdateAvatarModal
        dispatchSetUserInfo={dispatchSetUserInfo}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        userInfo={userInfo}
      />
      <View style={tw`h-20 bg-${colors.primary}`}></View>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={tw`flex flex-row items-center bg-${colors.primary} p-3`}>
        <Image
          source={{uri: userInfo.avatar}}
          style={tw`w-16 h-16 rounded-full mr-3`}
        />
        <View>
          <Text
            style={tw`text-xl font-bold text-${colors.textColorPrimary} mb-1`}>
            Phạm Quang Long
          </Text>
          <View
            style={tw`bg-${colors.textColorPrimary} flex-row justify-center text-${colors.primary} p-2 rounded-full`}>
            <Text>Thành viên</Text>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default AccountHeader;
