import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AlbumScreen from './AlbumScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = props => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="Album"
        component={AlbumScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
