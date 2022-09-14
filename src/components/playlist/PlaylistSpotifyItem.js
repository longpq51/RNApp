import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import usePlayingAlbum from '../../hooks/spotify/usePLayingAlbum';
import useConvertObject from '../../hooks/useConvertObject';
import {
  setAudioPlaying,
  setIsShowModalPlayer,
  setModalSearchVisible,
  setPlayPlaylist,
} from '../../store/actions';
import WishlistBtn from '../buttons/WishlistBtn';
import Title from '../Title';
import ArtistList from './ArtistList';

const PlaylistSpotifyItem = props => {
  const {item, index, img} = props;
  const fn = useConvertObject();
  const artists =
    item !== undefined && item.name === undefined ? item.artist : item.artists;

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

  const {PlayingAlbum, dispatchPlayingAlbum} = usePlayingAlbum();

  console.log(item);

  return (
    <TouchableOpacity
      onPress={() => {
        dispatchModalSearchVisible(false);
        dispatchIsShowModalPlayer(true);
        dispatchAudioPlaying(item.name !== undefined ? fn(item, img) : item);
        dispatchPlayPlaylist({name: '', type: false});
        dispatchPlayingAlbum([]);
      }}
      style={tw`bg-${colors.background} mx-3 my-1 p-3 rounded-md flex-row items-center`}>
      <View style={tw`px-3 py-2 bg-white mr-3 rounded-full`}>
        <Text>{index}</Text>
      </View>
      <View style={tw`w-64`}>
        <Title title={item.name !== undefined ? item.name : item.title} />
        <ArtistList data={artists} />
      </View>
      <View style={tw`flex-1`}></View>
      <WishlistBtn item={item.name !== undefined ? fn(item, img) : item} />
    </TouchableOpacity>
  );
};

export default PlaylistSpotifyItem;
