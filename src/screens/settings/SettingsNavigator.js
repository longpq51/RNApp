import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {isShowMiniPlayerSelector} from '../../store/selectors';
import InfoAppScreen from './InfoAppScreen';
import PrivacyScreen from './PrivacyScreen';
import SettingsScreen from './SettingsScreen';
import TermOfUseScreen from './TermOfUseScreen';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  const screenOptions = {
    headerShown: false,
  };

  const isShowMiniPlayer = useSelector(isShowMiniPlayerSelector);

  return (
    <SafeAreaView>
      <View style={{height: isShowMiniPlayer ? 668 : 750}}>
        <Stack.Navigator
          initialRouteName="Settings"
          screenOptions={screenOptions}>
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Privacy" component={PrivacyScreen} />
          <Stack.Screen name="TermOfUse" component={TermOfUseScreen} />
          <Stack.Screen name="InfoApp" component={InfoAppScreen} />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default SettingsNavigator;
