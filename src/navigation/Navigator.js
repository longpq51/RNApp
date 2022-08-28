import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Tabbar from "./Tabbar"

const Stack = createNativeStackNavigator()

const Navigator = () => {
   const screenOptions = {
      headerShown: false
   }

   return <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabbar">
         <Stack.Screen name="Tabbar" component={Tabbar} options={screenOptions}/>
      </Stack.Navigator>
   </NavigationContainer>
}

export default Navigator