import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import {
  faHome,
  faClose,
  faGear,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {colors} from '../assets/colors';
import MiniPlayer from '../components/MiniPlayer';
import {View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AccountNavigator from '../screens/account/AccountNavigator';
import Player from '../screens/Player';
import HomeNavigator from '../screens/home/HomeNavigator';
import {useSelector} from 'react-redux';
import {wishlistSelector} from '../store/selectors';
import WishlistNavigator from '../screens/wishlist/WishlistNavigator';

const Tab = createBottomTabNavigator();

const Tabbar = () => {
  const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarIcon: ({focused, color, size}) => {
      return (
        <FontAwesomeIcon
          icon={
            route.name === 'Trang chủ'
              ? faHome
              : route.name === 'Cài đặt'
              ? faGear
              : route.name === 'Yêu thích'
              ? faHeart
              : faUser
          }
          color={color}
        />
      );
    },
    tabBarActiveTintColor: colors.rgbPrimary,
    tabBarStyle: {
      paddingTop: 5,
    },
    tabBarOptions: {
      keyboardHidesTabBar: true,
    },
    tabBarLabelStyle: {
      paddingBottom: 5,
    },
    tabBarHideOnKeyboard: true,
  });

  const wishlist = useSelector(wishlistSelector);

  return (
    <View style={tw`flex-1`}>
      <MiniPlayer />
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Trang chủ" component={HomeNavigator} />
        <Tab.Screen
          name="Yêu thích"
          component={WishlistNavigator}
          options={{
            tabBarBadge: wishlist.length !== 0 ? wishlist.length : undefined,
            tabBarBadgeStyle: {
              backgroundColor: colors.rgbTextColorPrimary,
              fontSize: 10,
              color: colors.rgbPrimary,
            },
          }}
        />
        <Tab.Screen name="Tài khoản" component={AccountNavigator} />
        <Tab.Screen name="Cài đặt" component={SettingsScreen} />
      </Tab.Navigator>
      <Player />
    </View>
  );
};

export default Tabbar;
