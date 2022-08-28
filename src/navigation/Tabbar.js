import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import SettingsScreen from "../screens/SettingsScreen"
import {faHome, faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator()

const Tabbar = () => {
   const screenOptions = ({route}) => ({
      headerShown: false,
      tabBarIcon: ({focused, color, size}) => {
         return <FontAwesomeIcon icon={route.name === "Home" ? faHome : faClose} color={color}/>
      },
   })

   return <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Settings" component={SettingsScreen}/>
   </Tab.Navigator>
}

export default Tabbar