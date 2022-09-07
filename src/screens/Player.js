import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect} from 'react';
import {
  Animated,
  Image,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {useDispatch, useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {tracks, playlists} from '../../data/index';
import {colors} from '../assets/colors';
import LoopBtn from '../components/buttons/LoopBtn';
import NextBtn from '../components/buttons/NextBtn';
import PreviousBtn from '../components/buttons/PreviousBtn';
import RandomBtn from '../components/buttons/RandomBtn';
import HeaderPlayer from '../components/HeaderPlayer';
import SliderUI from '../components/Slider';
import useRotateAnimated from '../hooks/useRotateAnimated';
import useSetupPlayer from '../hooks/useSetupPlayer';
import {
  audioPlayingSelector,
  isShowModalPlayerSelector,
  playlistSelector,
  playPlaylistSelector,
} from '../store/selectors';
import CDAnimation from '../components/CDAnimation';
import usePlayPlaylist from '../hooks/playlist/usePlayPlaylist';
import useGetAudioList from '../hooks/playlist/useGetAudioList';

const Player = props => {
  const playbackState = usePlaybackState();

  const {setup, togglePlayback} = useSetupPlayer();
  const {spin, start, stop} = useRotateAnimated();

  const playlist = useSelector(playlistSelector);
  const playPlaylist = useSelector(playPlaylistSelector);

  const {dispatchAudioPlaying} = usePlayPlaylist();
  const audioList = useGetAudioList(playPlaylist.name);

  const isShowModalPlayer = useSelector(isShowModalPlayerSelector);

  const item = useSelector(audioPlayingSelector);

  useEffect(() => {
    const player = async () => {
      await setup(
        playPlaylist.type
          ? playlist[0].filter(item => item.name === playPlaylist.name)[0].data
          : item,
      );
      await TrackPlayer.play();
    };
    player();
    return () => TrackPlayer.reset();
  }, [item, playPlaylist]);

  return (
    <Modal animationType="slide" transparent={true} visible={isShowModalPlayer}>
      <SafeAreaView style={tw`flex-1 items-center bg-white`}>
        <HeaderPlayer item={item} />

        <CDAnimation
          item={item}
          size="h-1/3 w-2/3"
          spin={spin}
          start={start}
          stop={stop}
        />

        <View style={tw`flex-1 w-full items-center`}>
          <SliderUI item={item} />
          <View style={tw`flex-row items-center`}>
            <LoopBtn />
            <PreviousBtn onPress={() => TrackPlayer.skipToPrevious()} />
            <TouchableOpacity
              style={tw`bg-${colors.primary} p-5 rounded-full mx-3 border border-white border-8 z-10`}
              onPress={() => {
                togglePlayback(playbackState);
                playbackState === State.Playing ? stop() : start();
              }}>
              <FontAwesomeIcon
                color="white"
                size={40}
                icon={playbackState === State.Playing ? faPause : faPlay}
              />
            </TouchableOpacity>
            <NextBtn
              onPress={() => {
                TrackPlayer.skipToNext();
                TrackPlayer.getCurrentTrack().then(i => {
                  // dispatchAudioPlaying(audioList[i]);
                  TrackPlayer.getTrack(i).then(res =>
                    dispatchAudioPlaying(res),
                  );
                });
              }}
            />
            <RandomBtn />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Player;
