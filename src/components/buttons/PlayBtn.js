import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';
import {State, usePlaybackState} from 'react-native-track-player';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import useSetupPlayer from '../../hooks/useSetupPlayer';

const PlayBtn = props => {
  const {size} = props;

  const playbackState = usePlaybackState();

  const {setup, togglePlayback} = useSetupPlayer();

  return (
    <TouchableOpacity
      style={tw`bg-${colors.primary} p-2 rounded-full mx-3 border border-white border-2 z-10`}
      onPress={() => togglePlayback(playbackState)}>
      <FontAwesomeIcon
        color="white"
        size={size}
        icon={playbackState === State.Playing ? faPause : faPlay}
      />
    </TouchableOpacity>
  );
};

export default PlayBtn;
