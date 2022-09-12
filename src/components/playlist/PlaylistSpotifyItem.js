import {Image, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import useConvertObject from '../../hooks/useConvertObject';
import {
  setAudioPlaying,
  setIsShowModalPlayer,
  setModalSearchVisible,
  setPlayPlaylist,
} from '../../store/actions';
import Title from '../Title';
import ArtistList from './ArtistList';

const PlaylistSpotifyItem = props => {
  const {item} = props;
  const fn = useConvertObject();
  //   console.log(audio);
  const artists = item.artists;

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
    <TouchableOpacity
      onPress={() => {
        dispatchModalSearchVisible(false);
        dispatchIsShowModalPlayer(true);
        dispatchAudioPlaying(fn(item));
        dispatchPlayPlaylist({name: '', type: false});
      }}
      style={tw`bg-${colors.background} mx-3 my-1 p-3 rounded-md`}>
      <Title title={item.name} />
      <ArtistList data={artists} />
    </TouchableOpacity>
  );
};

export default PlaylistSpotifyItem;
