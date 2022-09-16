import {faList, faPause, faPlay} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  Text,
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
  audioSelector,
  isShowModalPlayerSelector,
  playPlaylistSelector,
  updateSelector,
} from '../store/selectors';
import CDAnimation from '../components/CDAnimation';
import usePlayPlaylist from '../hooks/playlist/usePlayPlaylist';
import useGetAudioList from '../hooks/playlist/useGetAudioList';
import PlaylistModal from '../components/PlaylistModal';
import useAudio from '../hooks/useAudio';
import usePlayingAlbum from '../hooks/spotify/usePLayingAlbum';

const Player = props => {
  const playbackState = usePlaybackState();
  const [isShowPlaylistModal, setIsShowPlaylistModal] = useState(false);

  const {setup, togglePlayback} = useSetupPlayer();
  const {spin, start, stop} = useRotateAnimated();

  const playPlaylist = useSelector(playPlaylistSelector);

  const {dispatchAudioPlaying} = usePlayPlaylist();

  const audioList = useGetAudioList(playPlaylist.name);

  const isShowModalPlayer = useSelector(isShowModalPlayerSelector);

  const audioPlaying = useSelector(audioPlayingSelector);
  const {audio, dispatchAudio} = useAudio();

  const {PlayingAlbum, dispatchPlayingAlbum} = usePlayingAlbum();
  const item =
    playPlaylist.type || PlayingAlbum.length !== 0 ? audio : audioPlaying;

  useEffect(() => {
    const player = async () => {
      await setup(
        playPlaylist.type
          ? audioList
          : PlayingAlbum.length !== 0
          ? PlayingAlbum
          : item,
      );
      await TrackPlayer.play();
      playPlaylist.type &&
        (await TrackPlayer.getCurrentTrack().then(res =>
          TrackPlayer.getTrack(res).then(i => {
            dispatchAudio(i);
          }),
        ));

      PlayingAlbum.length !== 0 &&
        (await TrackPlayer.getCurrentTrack().then(res =>
          TrackPlayer.getTrack(res).then(i => {
            dispatchAudio(i);
          }),
        ));
    };
    player();
    return () => {
      TrackPlayer.reset();
      setIsShowPlaylistModal(false);
    };
  }, [audioPlaying]);

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
            <PreviousBtn
              onPress={() => {
                TrackPlayer.skipToPrevious();
                TrackPlayer.getCurrentTrack().then(res =>
                  TrackPlayer.getTrack(res).then(i => dispatchAudio(i)),
                );
              }}
            />
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
                TrackPlayer.getCurrentTrack().then(res =>
                  TrackPlayer.getTrack(res).then(i => dispatchAudio(i)),
                );
              }}
            />
            <RandomBtn />
          </View>
        </View>

        {(playPlaylist.type || PlayingAlbum.length !== 0) && (
          <View style={tw`w-full`}>
            <TouchableOpacity
              onPress={() => setIsShowPlaylistModal(true)}
              style={tw`p-3 flex-row items-center self-end`}>
              <FontAwesomeIcon
                icon={faList}
                style={tw`text-${colors.primary}`}
              />
              <Text style={tw`font-bold ml-3 text-${colors.primary}`}>
                Danh sách bài hát
              </Text>
            </TouchableOpacity>
            <PlaylistModal
              audio={audio}
              i={item}
              isShowPlaylistModal={isShowPlaylistModal}
              setIsShowPlaylistModal={setIsShowPlaylistModal}
            />
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
};

export default Player;
