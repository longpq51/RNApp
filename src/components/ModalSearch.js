import {faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Modal, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import {modalSearchVisibleSelector} from '../store/selectors';
import InputItem from './InputItem';

const ModalSearch = props => {
  const {value, setValue} = props;

  const modalSearchVisible = useSelector(modalSearchVisibleSelector);
  console.log(modalSearchVisible);

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
          <InputItem
            placeholder="Nhập từ khoá tìm kiếm..."
            value={value}
            setValue={setValue}
          />
          <TouchableOpacity style={tw`mt-2 text-${colors.primary}`}>
            <FontAwesomeIcon icon={faClose} size={30} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalSearch;
