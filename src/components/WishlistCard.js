import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import {
  deleteFromWishlist,
  setAudioPlaying,
  setIsShowModalPlayer,
  setPlayPlaylist,
} from '../store/actions';
import TrashBtn from './buttons/TrashBtn';
import ArtistList from './playlist/ArtistList';

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

  const dispatchDeleteFromWishlist = data => {
    dispatchRedux(deleteFromWishlist(data));
  };

  return (
    <TouchableOpacity
      style={tw`w-1/2`}
      onPress={() => {
        dispatchIsShowModalPlayer(true);
        dispatchAudioPlaying(item);
        dispatchPlayPlaylist({name: '', type: false});
      }}>
      <View style={tw`bg-${colors.textColor} m-2 rounded-md shadow-md`}>
        <Image
          source={item.artwork}
          style={tw`h-32 w-full rounded-t-md mr-3`}
        />
        <View style={tw`m-3 flex-row items-center justify-between`}>
          <View style={tw`w-32`}>
            <Text
              style={tw`font-bold text-lg text-${colors.primary}`}
              numberOfLines={1}>
              {item.title}
            </Text>
            {Array.isArray(item.artist) ? (
              <ArtistList data={item.artist} />
            ) : (
              <Text style={tw`text-xs`} numberOfLines={1}>
                {item.artist}
              </Text>
            )}
          </View>

          <TrashBtn onPress={() => dispatchDeleteFromWishlist(item)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WishlistCard;
