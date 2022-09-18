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
    <SafeAreaView style={tw`pb-20 relative`}>
      <UpdateAvatarModal
        dispatchSetUserInfo={dispatchSetUserInfo}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        userInfo={userInfo}
      />
      <View style={tw`h-44 bg-${colors.primary}`}></View>
      <View style={tw`flex flex-row items-center p-3 absolute bottom-0`}>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={tw`border-8 border-gray-100 mr-3 rounded-full`}>
          <Image
            source={{uri: userInfo.avatar}}
            style={tw`w-32 h-32 rounded-full`}
          />
        </Pressable>
        <View>
          <View
            style={tw`bg-${colors.textColorPrimary} mb-3 w-24 items-center justify-center text-${colors.textColor} p-2 rounded-full`}>
            <Text>Thành viên</Text>
          </View>
          <Text style={tw`text-xl font-bold text-${colors.primary}`}>
            longpq@comartek
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountHeader;
