import React, {useState, useEffect} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {colors} from '../assets/colors';

const Splash = props => {
  var [logoOpacity, setLogoOpacity] = useState(new Animated.Value(0));
  var [tittleMarginTop, setMarginTop] = useState(new Animated.Value(300));

  var {navigation, route} = props;
  var {navigate, goBack, dispatch} = navigation;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),

      Animated.timing(tittleMarginTop, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      dispatch(StackActions.replace('Login'));
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Animated.Image
        style={{
          width: 150,
          height: 150,
          opacity: logoOpacity,
          borderRadius: 100,
        }}
        source={require('../assets/logo.png')}
      />
      <Animated.Text
        style={{
          fontSize: 20,
          color: colors.primary,
          fontWeight: 'bold',
          transform: [{translateY: tittleMarginTop}],
        }}>
        KAMA SUTRA
      </Animated.Text>
    </View>
  );
};

export default Splash;
