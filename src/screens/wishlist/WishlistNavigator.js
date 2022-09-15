import {faList, faMusic} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import {wishlistAlbumSelector, wishlistSelector} from '../../store/selectors';
import WishlistAlbumScreen from './WishlistAlbumScreen';
import WishlistScreen from './WishlistScreen';

const Tab = createMaterialTopTabNavigator();

const WishlistNavigator = () => {
  const wishlist = useSelector(wishlistSelector);
  const wishlistAlbum = useSelector(wishlistAlbumSelector);

  const screenOptions = ({route}) => ({
    tabBarIndicatorStyle: {
      backgroundColor: colors.rgbPrimary,
      color: colors.rgbPrimary,
    },
    tabBarActiveTintColor: colors.rgbPrimary,
    tabBarIcon: ({focused, color}) => {
      return (
        <FontAwesomeIcon
          icon={route.name === 'Bài hát' ? faMusic : faList}
          color={color}
        />
      );
    },
    tabBarShowLabel: false,
  });

  return (
    <SafeAreaView style={tw`flex-1`}>
      <Tab.Navigator
        initialRouteName="WishlistAlbum"
        screenOptions={screenOptions}>
        <Tab.Screen
          name="Bài hát"
          component={WishlistScreen}
          options={{
            tabBarBadge: () => {
              return (
                wishlist.length > 0 && (
                  <View
                    style={tw`bg-${colors.textColorPrimary} px-2 py-1 rounded-bl-full`}>
                    <Text style={tw`text-xs text-${colors.primary} `}>
                      {' ' + wishlist.length}
                    </Text>
                  </View>
                )
              );
            },
          }}
        />
        <Tab.Screen
          name="Album Yêu thích"
          component={WishlistAlbumScreen}
          options={{
            tabBarBadge: () => {
              return (
                wishlistAlbum.length > 0 && (
                  <View
                    style={tw`bg-${colors.textColorPrimary} px-2 py-1 rounded-bl-full`}>
                    <Text style={tw`text-xs text-${colors.primary}`}>
                      {' ' + wishlistAlbum.length}
                    </Text>
                  </View>
                )
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default WishlistNavigator;
