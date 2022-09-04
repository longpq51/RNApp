import {faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';

const CloseBtn = props => {
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon icon={faClose} size={30} />
    </TouchableOpacity>
  );
};

export default CloseBtn;
