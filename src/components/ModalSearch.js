import {faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Modal, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import {setModalSearchVisible} from '../store/actions';
import {modalSearchVisibleSelector} from '../store/selectors';
import InputItem from './InputItem';

const ModalSearch = props => {
  const {value, setValue} = props;

  const modalSearchVisible = useSelector(modalSearchVisibleSelector);
  const dispatchRedux = useDispatch();
  const dispatchModalSearchVisible = data => {
    dispatchRedux(setModalSearchVisible(data));
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalSearchVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalSearchVisible);
      }}>
      <SafeAreaView style={tw`bg-white flex-1`}>
        <View style={tw`flex flex-row items-center mx-2`}>
          <View style={tw`flex-1`}>
            <InputItem
              placeholder="Nhập từ khoá tìm kiếm..."
              value={value}
              setValue={setValue}
            />
          </View>
          <TouchableOpacity
            style={tw`mt-2 text-${colors.primary} ml-2`}
            onPress={() => dispatchModalSearchVisible(false)}>
            <FontAwesomeIcon
              icon={faClose}
              size={30}
              color={colors.rgbPrimary}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalSearch;
