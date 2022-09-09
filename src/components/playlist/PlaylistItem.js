import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import useSetupPlayer from '../../hooks/useSetupPlayer';
import {
  addToWishlist,
  setAudioPlaying,
  setIsShowModalPlayer,
  setModalSearchVisible,
  setPlayPlaylist,
} from '../../store/actions';
import WishlistBtn from '../buttons/WishlistBtn';

const PlaylistItem = props => {
  const {data, modalVisible, type} = props;
  const item =
    type === undefined
      ? data.item[0] !== undefined
        ? data.item[0]
        : data.item
      : data;

  const dispatchRedux = useDispatch();
  const dispatchIsShowModalPlayer = data => {
    dispatchRedux(setIsShowModalPlayer(data));
  };

  const dispatchAudioPlaying = data => {
    dispatchRedux(setAudioPlaying(data));
  };

  const dispatchPlayPlaylist = data => {
    dispatchRedux(setPlayPlaylist(data));
  };

  const dispatchModalSearchVisible = data => {
    dispatchRedux(setModalSearchVisible(data));
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={tw`my-1 mx-2 p-2 bg-white rounded-md flex-row items-center shadow-md justify-between`}
        onPress={() => {
          modalVisible !== undefined && modalVisible(false);
          dispatchModalSearchVisible(false);
          dispatchIsShowModalPlayer(true);
          dispatchAudioPlaying(item);
          dispatchPlayPlaylist({name: '', type: false});
        }}>
        <View style={tw`flex-row items-center`}>
          <Image source={item.artwork} style={tw`h-16 w-16 rounded-md mr-3`} />
          <View style={tw`w-44`}>
            <Text
              style={tw`font-bold text-lg text-${colors.primary}`}
              numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={tw`text-xs`} numberOfLines={1}>
              {item.artist}
            </Text>
          </View>
        </View>

        <WishlistBtn item={item} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PlaylistItem;
