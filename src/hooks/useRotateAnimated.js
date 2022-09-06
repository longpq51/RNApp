import {useEffect} from 'react';
import {useState} from 'react';
import {Animated, Easing} from 'react-native';
import {State, usePlaybackState, useProgress} from 'react-native-track-player';
import {useSelector} from 'react-redux';
import {spinValueSelector} from '../store/selectors';

const useRotateAnimated = () => {
  const spinValue = useSelector(spinValueSelector);
  const playbackState = usePlaybackState();

  const start = () => {
    spinValue.setValue(0);

    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const stop = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 5000,
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
