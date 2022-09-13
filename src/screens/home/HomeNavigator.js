import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AlbumScreen from './AlbumScreen';
import ArtistScreen from './ArtistScreen';
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
      <Stack.Screen
        name="Artist"
        component={ArtistScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
