import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import {
  setAudioPlaying,
  setIsShowModalPlayer,
  setPlayPlaylist,
} from '../store/actions';

const WishlistCard = props => {
  const {item} = props;
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

  return (
    <TouchableOpacity
      style={tw`w-1/2`}
      onPress={() => {
        dispatchIsShowModalPlayer(true);
        dispatchAudioPlaying(item);
        dispatchPlayPlaylist({name: '', type: false});
      }}>
      <View style={tw`bg-${colors.background} m-2 rounded-md`}>
        <Image source={item.artwork} style={tw`h-32 w-full rounded-md mr-3`} />
        <View style={tw`m-3`}>
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
    </TouchableOpacity>
  );
};

export default WishlistCard;
