import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import Player from '../../screens/Player';
import {setAudioPlaying, setIsShowModalPlayer} from '../../store/actions';
import {isShowModalPlayerSelector} from '../../store/selectors';

const PlaylistItem = props => {
  const {data} = props;
  const item = data.item[0];
  // console.log(item.source);
  const navigation = useNavigation();
  const dispatchRedux = useDispatch();
  const dispatchIsShowModalPlayer = data => {
    dispatchRedux(setIsShowModalPlayer(data));
  };

  const dispatchAudioPlaying = data => {
    dispatchRedux(setAudioPlaying(data));
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={tw`my-1 mx-2 p-2 bg-white rounded-md flex-row items-center`}
        onPress={() => {
          // navigation.navigate('Player', {item: item})
          dispatchIsShowModalPlayer(true);
          dispatchAudioPlaying(item);
        }}>
        <Image source={item.artwork} style={tw`h-16 w-16 rounded-md mr-3`} />
        <View style={tw`w-52`}>
          <Text
            style={tw`font-bold text-lg text-${colors.primary}`}
            numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={tw`text-xs`} numberOfLines={1}>
            {item.artist}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PlaylistItem;
