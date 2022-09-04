import {faForwardStep} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {useDispatch, useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import {setIsShowModalPlayer} from '../store/actions';
import {
  audioPlayingSelector,
  isShowMiniPlayerSelector,
} from '../store/selectors';
import NextBtn from './buttons/NextBtn';
import PlayBtn from './buttons/PlayBtn';
import WishlistBtn from './buttons/WishlistBtn';
import SliderUI from './Slider';

const MiniPlayer = props => {
  const isShowMiniPlayer = useSelector(isShowMiniPlayerSelector);

  const item = useSelector(audioPlayingSelector);
  const dispatchRedux = useDispatch();
  const dispatchIsShowModalPlayer = data => {
    dispatchRedux(setIsShowModalPlayer(data));
  };

  return (
    isShowMiniPlayer && (
      <View
        style={tw`absolute z-10 bottom-12 w-full bg-${colors.primary} rounded-t-lg p-2`}>
        <SliderUI item={item} type="miniPlayer" />
        <View style={tw`flex-row items-center justify-between`}>
          <TouchableOpacity
            style={tw`flex-row`}
            onPress={() => dispatchIsShowModalPlayer(true)}>
            <Image
              source={item.artwork}
              style={tw`h-12 w-12 mr-3 rounded-full`}
            />
            <View style={tw`w-48`}>
              <Text
                numberOfLines={1}
                style={tw`font-bold text-xl text-${colors.textColorPrimary}`}>
                {item.title}
              </Text>
              <Text
                style={[tw`text-${colors.textColor}`, {width: 150}]}
                numberOfLines={1}>
                {item.artist}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={tw`flex-row items-center`}>
            <WishlistBtn />
            <PlayBtn size={20} />
            <TouchableOpacity
              style={tw`p-2`}
              onPress={() => TrackPlayer.skipToNext()}>
              <FontAwesomeIcon
                icon={faForwardStep}
                size={20}
                style={tw`text-${colors.textColorPrimary}`}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
};

export default MiniPlayer;
