import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../../assets/colors';
import WishlistAlbumScreen from './WishlistAlbumScreen';
import WishlistScreen from './WishlistScreen';

const Tab = createMaterialTopTabNavigator();

const WishlistNavigator = () => {
  const screenOptions = {
    tabBarIndicatorStyle: {
      backgroundColorr: colors.rgbPrimary,
    },
  };

  return (
    <Tab.Navigator
      initialRouteName="WishlistAlbum"
      screenOptions={screenOptions}>
      <Tab.Screen name="Bài hát" component={WishlistScreen} />
      <Tab.Screen name="Album Yêu thích" component={WishlistAlbumScreen} />
    </Tab.Navigator>
  );
};

export default WishlistNavigator;
