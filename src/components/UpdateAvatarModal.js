import {Alert, Modal, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import ModalButton from './ModalButton';

const UpdateAvatarModal = props => {
  const {modalVisible, setModalVisible, dispatchSetUserInfo, userInfo} = props;

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={tw`flex-1`}
          onPress={() => {
            setModalVisible(false);
          }}></TouchableOpacity>
        <View
          style={tw`bg-white justify-end pb-20 shadow-xl rounded-t-lg pt-5`}>
          <ModalButton
            color={colors.primary}
            textColor={colors.textColor}
            text="Chọn ảnh từ thư viện"
            onPress={() => {
              launchImageLibrary(
                {
                  mediaType: 'photo',
                },
                response => {
                  if (response.didCancel != true) {
                    dispatchSetUserInfo({
                      ...userInfo,
                      avatar: response.assets[0].uri,
                    });
                    setModalVisible(false);
                  }
                },
              );
            }}
          />
          <ModalButton
            color={colors.primary}
            textColor={colors.textColor}
            text="Chụp ảnh"
            onPress={() => {
              launchCamera(
                {
                  cameraType: 'back',
                  saveToPhotos: true,
                },
                response => {
                  if (response.errorCode !== undefined) {
                    Alert.alert(response.errorCode);
                  } else if (response.didCancel != true) {
                    dispatchSetUserInfo({
                      ...userInfo,
                      avatar: response.assets[0].uri,
                    });
                    setModalVisible(false);
                  }
                },
              );
            }}
          />
          <ModalButton
            color={colors.background}
            textColor={colors.primary}
            text="Thoát"
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default UpdateAvatarModal;
