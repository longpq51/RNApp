import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {
  faHome,
  faClose,
  faGear,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import WishlistScreen from '../screens/WishlistScreen';
import AccountScreen from '../screens/AccountScreen';
import {colors} from '../assets/colors';

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
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Yêu thích" component={WishlistScreen} />
      <Tab.Screen name="Tài khoản" component={AccountScreen} />
      <Tab.Screen name="Cài đặt" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Tabbar;
