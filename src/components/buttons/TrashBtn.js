import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const TrashBtn = props => {
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon icon={faTrash} style={tw`text-red-400`} />
    </TouchableOpacity>
  );
};
export default TrashBtn;
