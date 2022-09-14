import {useEffect} from 'react';
import {Animated} from 'react-native';
import {State, usePlaybackState} from 'react-native-track-player';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import useRotateAnimated from '../hooks/useRotateAnimated';
import {
  isShowMiniPlayerSelector,
  isShowModalPlayerSelector,
} from '../store/selectors';

const CDAnimation = props => {
  const {item, size, spin, start, stop} = props;
  const playbackState = usePlaybackState();
  // console.log(item);

  useEffect(() => {
    playbackState === State.Playing ? start() : stop();
  }, [playbackState]);

  return (
    <Animated.Image
      source={item.artwork}
      style={[
        tw`${size} rounded-full ${size === 'h-1/3 w-2/3' ? 'my-32' : 'mr-3'}`,
        {transform: [{rotate: spin}]},
      ]}
    />
  );
};

export default CDAnimation;
