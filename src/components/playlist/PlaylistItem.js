import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';

const PlaylistItem = props => {
  const {data} = props;
  const item = data.item[0];
  console.log(item.source);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={tw`my-1 mx-2 p-2 bg-white rounded-md`}
      onPress={() => navigation.navigate('Player', {item: item})}>
      <Image source={item.source} />
      <View style={tw``}>
        <Text style={tw`font-bold text-lg text-${colors.primary}`}>
          {item.title}
        </Text>
        <Text style={tw`text-xs`}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistItem;
