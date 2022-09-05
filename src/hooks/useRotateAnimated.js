import {useEffect} from 'react';
import {useState} from 'react';
import {Animated, Easing} from 'react-native';
import {State, usePlaybackState, useProgress} from 'react-native-track-player';

const useRotateAnimated = () => {
  var [spinValue, setSpinValue] = useState(new Animated.Value(0));

  const start = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const stop = () => {
    spinValue.stopAnimation(value => spinValue.setValue(value));
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).stop();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return {
    spin,
    start,
    stop,
  };
};

export default useRotateAnimated;
