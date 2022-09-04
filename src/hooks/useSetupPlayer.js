import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

TrackPlayer.setupPlayer();

const useSetupPlayer = () => {
  const setup = async item => {
    await TrackPlayer.add(item);
    await TrackPlayer.updateOptions({
      stopWithApp: false,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });
  };

  const togglePlayback = async playbackState => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack !== null) {
      if (playbackState == State.Paused) {
        await TrackPlayer.play();
      } else if (playbackState === State.Playing) {
        await TrackPlayer.pause();
      } else if (playbackState === State.Stopped) {
        // await setup(item);
        // await TrackPlayer.play();
        TrackPlayer.skipToPrevious();
      }
    }
  };

  return {
    setup,
    togglePlayback,
  };
};

export default useSetupPlayer;
