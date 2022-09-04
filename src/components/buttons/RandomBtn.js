import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import tw from 'tailwind-react-native-classnames';
import {faShuffle} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../../assets/colors';

const RandomBtn = () => {
  return (
    <TouchableOpacity
      style={tw`ml-3 p-3 rounded-full bg-${
        // select === false ? colors.textColorPrimary :
        colors.primary
      }`}>
      <FontAwesomeIcon icon={faShuffle} size={25} color={colors.textColor} />
    </TouchableOpacity>
  );
};
export default RandomBtn;
