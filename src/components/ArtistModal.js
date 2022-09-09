import {Image, Modal, SafeAreaView, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import CloseBtn from './buttons/CloseBtn';
import PlaylistItem from './playlist/PlaylistItem';

const ArtistModal = props => {
  const {item, isShowModal, setIsShowModal} = props;

  return (
    <Modal animationType="slide" transparent={true} visible={isShowModal}>
      <SafeAreaView style={tw`bg-${colors.textColor} flex-1`}>
        <View style={tw`p-3`}>
          <CloseBtn onPress={() => setIsShowModal(false)} />

          <View
            style={tw`justify-center items-center bg-${colors.background} rounded-lg mb-5 p-10`}>
            <Image
              source={item.artwork}
              style={tw`h-36 w-1/2 rounded-full mb-5`}
            />
            <Text numberOfLines={1} style={tw`text-center font-bold text-xl`}>
              {item.artist}
            </Text>
          </View>

          <Text style={tw`font-bold text-${colors.primary} ml-3 text-lg`}>
            Danh sách bài hát
          </Text>
          <PlaylistItem
            data={item}
            type="Artist"
            modalVisible={setIsShowModal}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ArtistModal;
