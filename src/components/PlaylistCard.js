import {useNavigation} from '@react-navigation/native';
import {Modal, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';

const PlaylistCard = props => {
  const {item} = props;
  const name = item.item[0] === undefined ? item.item.name : item.item[0].name;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={tw`bg-${colors.background} m-2 rounded-md p-3`}
      onPress={() => navigation.navigate('AudioList', {name: name})}>
      <Text style={tw`font-bold text-${colors.primary} text-lg`}>{name}</Text>
      <Text style={tw`text-xs`}>
        Tạo bởi <Text style={tw`text-${colors.primary}`}>longpq</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default PlaylistCard;
