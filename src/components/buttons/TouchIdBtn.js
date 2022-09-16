import {faFingerprint} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import useTouchId from '../../hooks/useTouchId';

const TouchIdBtn = () => {
  const fingerprint = useTouchId();

  return (
    <TouchableOpacity
      style={tw`bg-${colors.background} p-2 rounded-full`}
      onPress={() => fingerprint()}>
      <FontAwesomeIcon icon={faFingerprint} />
    </TouchableOpacity>
  );
};

export default TouchIdBtn;
