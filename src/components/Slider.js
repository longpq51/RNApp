// import Slider from '@react-native-community/slider';
import {Platform, Text, View} from 'react-native';
import TrackPlayer, {
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import useConvertTime from '../hooks/useConvertTime';
import {useSelector} from 'react-redux';
import {
  isShowMiniPlayerSelector,
  isShowModalPlayerSelector,
} from '../store/selectors';
import Slider from '@react-native-community/slider';

const SliderUI = props => {
  const {item, type} = props;

  const convertTime = useConvertTime();

  const progress = useProgress(100);

  const isShowMiniPlayer = useSelector(isShowMiniPlayerSelector);
  const isShowModalPlayer = useSelector(isShowModalPlayerSelector);

  return (
    <View style={tw`w-full self-center`}>
      {type === undefined && (
        <View
          style={tw`bg-${colors.primary} flex-row self-center p-2 px-4 rounded-full`}>
          <Text style={tw`text-${colors.textColorPrimary}`}>
            {convertTime(progress.position)}
          </Text>
          <Text style={tw`text-${colors.textColor}`}> / </Text>
          <Text style={tw`text-${colors.textColor}`}>{item.duration}</Text>
        </View>
      )}

      <Slider
        thumbStyle={
          isShowMiniPlayer && !isShowModalPlayer ? tw`h-1 w-1` : tw`h-4 w-4`
        }
        thumbTintColor={colors.rgbTextColorPrimary}
        style={tw`max-w-full ${
          isShowMiniPlayer && !isShowModalPlayer ? `` : 'mx-5'
        }`}
        value={progress.position}
        minimumValue={0}
        maximumValue={progress.duration}
        minimumTrackTintColor={
          type === undefined ? colors.rgbPrimary : colors.rgbTextColorPrimary
        }
        maximumTrackTintColor={type === undefined ? '#000000' : 'white'}
        onSlidingComplete={value => {
          TrackPlayer.seekTo(value);
        }}
      />
    </View>
  );
};

export default SliderUI;
