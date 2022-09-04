import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {Modal, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import BtnUI from '../../components/BtnUI';
import CloseBtn from '../../components/buttons/CloseBtn';
import HeaderAccountStack from '../../components/HeaderAccountStack';
import InputItem from '../../components/InputItem';

const ControlPlaylistScreen = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [playlistName, setPlaylistName] = useState('');

  return (
    <SafeAreaView>
      <HeaderAccountStack title="Playlist" />
      <TouchableOpacity
        onPress={() => setIsShowModal(true)}
        style={tw`flex-row items-center bg-${colors.background} p-3`}>
        <FontAwesomeIcon
          icon={faPlusCircle}
          size={30}
          style={tw`text-${colors.primary} mr-3`}
        />
        <Text style={tw`text-${colors.primary}`}>Tạo Playlist</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={isShowModal}>
        <SafeAreaView>
          <TouchableOpacity
            style={tw`h-10 opacity-25`}
            onPress={() => setIsShowModal(false)}></TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={tw`flex-1 bg-white rounded-t-lg shadow-2xl p-3`}>
          <CloseBtn onPress={() => setIsShowModal(false)} />
          <InputItem
            placeholder="Tên Playlist"
            value={playlistName}
            setValue={setPlaylistName}
          />
          <View style={tw`flex-1`}></View>
          <BtnUI text="Tạo Playlist" />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default ControlPlaylistScreen;
