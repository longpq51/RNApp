import {Image, Modal, SafeAreaView, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import CloseBtn from './buttons/CloseBtn';
import WishlistCard from './WishlistCard';

const ArtistModal = props => {
  const {item, isShowModal, setIsShowModal} = props;

  return (
    <Modal animationType="slide" transparent={true} visible={isShowModal}>
      <SafeAreaView style={tw`bg-${colors.textColor} flex-1`}>
        <View style={tw`p-3`}>
          <CloseBtn onPress={() => setIsShowModal(false)} />

          <View style={tw`justify-center items-center`}>
            <Image
              source={item.artwork}
              style={tw`h-1/2 w-1/2 rounded-full mb-5`}
            />
            <Text numberOfLines={1} style={tw`text-center`}>
              {item.artist}
            </Text>
          </View>

          <Text style={tw`font-bold text-${colors.primary} ml-3 text-lg`}>
            Danh sách bài hát
          </Text>
          <WishlistCard item={item} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ArtistModal;
