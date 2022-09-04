import AccountScreen from './AccountScreen';
import ControlPlaylistScreen from './ControlPlaylistScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName="AccountScreen">
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="ControlPlaylist"
        component={ControlPlaylistScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
