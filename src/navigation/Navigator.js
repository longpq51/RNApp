import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ControlPlaylistScreen from '../screens/account/ControlPlaylistScreen';
import ForgetPassword from '../screens/ForgetPassword';
import Login from '../screens/Login';
import Player from '../screens/Player';
import Register from '../screens/Register';
import Splash from '../screens/Splash';
import Tabbar from './Tabbar';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Tabbar"
          component={Tabbar}
          options={screenOptions}
        />
        <Stack.Screen name="Login" component={Login} options={screenOptions} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={screenOptions}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={screenOptions}
        />
        <Stack.Screen
          name="Player"
          component={Player}
          options={screenOptions}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
