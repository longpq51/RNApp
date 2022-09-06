import {useNavigation} from '@react-navigation/native';
import {Modal, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';

const PlaylistCard = props => {
  const {item} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={tw`bg-${colors.background} m-2 rounded-md`}
      onPress={() => navigation.navigate('AudioList', {name: item.item.name})}>
      <Text style={tw`font-bold m-3 text-${colors.primary}`}>
        {item.item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default PlaylistCard;
