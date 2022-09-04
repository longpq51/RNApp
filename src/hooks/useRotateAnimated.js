import {useEffect} from 'react';
import {useState} from 'react';
import {Animated, Easing} from 'react-native';
import {State, usePlaybackState} from 'react-native-track-player';

const useRotateAnimated = () => {
  var [spinValue, setSpinValue] = useState(new Animated.Value(0));

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return spin;
};

export default useRotateAnimated;
