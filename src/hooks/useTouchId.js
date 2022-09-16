import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import TouchID from 'react-native-touch-id';

const useTouchId = () => {
  const navigation = useNavigation();

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
  };

  const fingerprint = () => {
    TouchID.authenticate(
      'to demo this react-native component',
      optionalConfigObject,
    )
      .then(success => {
        navigation.navigate('Tabbar');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return fingerprint;
};

export default useTouchId;
