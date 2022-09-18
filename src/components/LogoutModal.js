import {StackActions, useNavigation} from '@react-navigation/native';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import ModalButton from './ModalButton';

const LogoutModal = props => {
  const {modalVisible, setModalVisible} = props;

  const navigation = useNavigation();

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableOpacity
        style={tw`flex-1 justify-center bg-black opacity-75`}
        onPress={() => setModalVisible(false)}></TouchableOpacity>

      <View
        style={tw`bg-white m-2 rounded-lg p-3 absolute top-1/3 self-center`}>
        <Text style={tw`my-2`}>
          Bạn có chắc muốn đăng xuất tài khoản{' '}
          <Text style={tw`text-${colors.primary}`}>longpq@comartek</Text> không?
        </Text>

        <View style={tw`flex-row justify-end`}>
          <ModalButton
            onPress={() => setModalVisible(false)}
            text="Huỷ"
            textColor="red-400"
            color={colors.background}
          />
          <ModalButton
            onPress={() => {
              setModalVisible(false);
              setTimeout(
                () => navigation.dispatch(StackActions.replace('Login')),
                1000,
              );
            }}
            text="Xác nhận"
            textColor={colors.textColor}
            color={colors.primary}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
