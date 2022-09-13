import {faAngleDown, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {useDispatch} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import {setIsShowMiniPlayer, setIsShowModalPlayer} from '../store/actions';
import WishlistBtn from './buttons/WishlistBtn';
import ArtistList from './playlist/ArtistList';

const HeaderPlayer = props => {
  const navigation = useNavigation();
  const {item} = props;
  // console.log(item);

  const dispatchRedux = useDispatch();
  const dispatchIsShowMiniPlayer = data => {
    dispatchRedux(setIsShowMiniPlayer(data));
  };
  const dispatchIsShowModalPlayer = data => {
    dispatchRedux(setIsShowModalPlayer(data));
  };

  return (
    <SafeAreaView>
      <View style={tw`flex-row w-96 items-center justify-between px-2 pb-3`}>
        <View style={tw`flex-row items-center`}>
          <TouchableOpacity
            style={tw`mr-3`}
            onPress={() => {
              // navigation.goBack();
              dispatchIsShowMiniPlayer(true);
              dispatchIsShowModalPlayer(false);
            }}>
            <FontAwesomeIcon icon={faAngleDown} size={30} />
          </TouchableOpacity>
          <View style={tw`w-52`}>
            <Text
              style={tw`font-bold text-xl text-${colors.primary}`}
              numberOfLines={1}>
              {item.title}
            </Text>
            {Array.isArray(item.artist) ? (
              <ArtistList data={item.artist} />
            ) : (
              <Text numberOfLines={1}>{item.artist}</Text>
            )}
          </View>
        </View>
        <WishlistBtn item={item} />
      </View>
    </SafeAreaView>
  );
};

export default HeaderPlayer;
