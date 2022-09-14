import {faForwardStep} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Animated,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {useDispatch, useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import usePlayingAlbum from '../hooks/spotify/usePLayingAlbum';
import useAudio from '../hooks/useAudio';
import useRotateAnimated from '../hooks/useRotateAnimated';
import {setIsShowModalPlayer} from '../store/actions';
import {
  audioPlayingSelector,
  isShowMiniPlayerSelector,
  isShowModalPlayerSelector,
  playPlaylistSelector,
} from '../store/selectors';
import PlayBtn from './buttons/PlayBtn';
import WishlistBtn from './buttons/WishlistBtn';
import CDAnimation from './CDAnimation';
import ArtistList from './playlist/ArtistList';
import SliderUI from './Slider';

const MiniPlayer = props => {
  const isShowMiniPlayer = useSelector(isShowMiniPlayerSelector);
  const playPlaylist = useSelector(playPlaylistSelector);
  const {spin, start, stop} = useRotateAnimated();

  const {PlayingAlbum, dispatchPlayingAlbum} = usePlayingAlbum();

  const {audio, dispatchAudio} = useAudio();
  const audioPlaying = useSelector(audioPlayingSelector);
  const item =
    playPlaylist.type || PlayingAlbum.length !== 0 ? audio : audioPlaying;
  const dispatchRedux = useDispatch();
  const dispatchIsShowModalPlayer = data => {
    dispatchRedux(setIsShowModalPlayer(data));
  };

  return (
    isShowMiniPlayer && (
      <View
        style={tw`absolute z-10 ${
          Platform.OS === 'ios' ? 'bottom-20' : 'bottom-12'
        } w-full bg-${colors.primary} rounded-t-lg p-2`}>
        <SliderUI item={item} type="miniPlayer" />
        <View style={tw`flex-row items-center justify-between`}>
          <TouchableOpacity
            style={tw`flex-row items-center`}
            onPress={() => dispatchIsShowModalPlayer(true)}>
            <CDAnimation
              item={item}
              size="w-10 h-10"
              spin={spin}
              start={start}
              stop={stop}
            />
            <View style={tw`w-44`}>
              <Text
                numberOfLines={1}
                style={tw`font-bold text-xl text-${colors.textColorPrimary}`}>
                {item.title}
              </Text>
              {Array.isArray(item.artist) ? (
                <ArtistList data={item.artist} color="text-white" />
              ) : (
                <Text
                  style={[tw`text-${colors.textColor}`, {width: 150}]}
                  numberOfLines={1}>
                  {item.artist}
                </Text>
              )}
            </View>
          </TouchableOpacity>

          <View style={tw`flex-row items-center`}>
            <WishlistBtn item={item} />
            <PlayBtn size={20} />
            <TouchableOpacity
              style={tw`p-2`}
              onPress={() => {
                TrackPlayer.skipToNext();
                TrackPlayer.getCurrentTrack().then(res =>
                  TrackPlayer.getTrack(res).then(i => dispatchAudio(i)),
                );
              }}>
              <FontAwesomeIcon
                icon={faForwardStep}
                size={20}
                style={tw`text-${colors.textColorPrimary}`}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
};

export default MiniPlayer;
