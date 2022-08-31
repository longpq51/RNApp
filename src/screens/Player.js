import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect} from 'react';
import {SafeAreaView, Text, Touchable, TouchableOpacity} from 'react-native';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {tracks, playlists} from '../../data/index';

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(tracks);
};

const togglePlayback = async playbackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    if (playbackState === State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

const Player = props => {
  const playbackState = usePlaybackState();

  const {item} = props;
  console.log(props);

  useEffect(async () => {
    await setupPlayer();
    await TrackPlayer.play();
    return () => TrackPlayer.reset();
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
        <FontAwesomeIcon
          icon={playbackState === State.Playing ? faPause : faPlay}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Player;
