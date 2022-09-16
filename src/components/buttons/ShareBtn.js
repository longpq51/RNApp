import {faShare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Share, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ShareBtn = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <TouchableOpacity style={tw`items-center`} onPress={onShare}>
      <FontAwesomeIcon icon={faShare} size={20} />
      <Text>Chia sẻ</Text>
    </TouchableOpacity>
  );
};

export default ShareBtn;
