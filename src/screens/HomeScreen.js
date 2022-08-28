import React from "react"
import { SafeAreaView, Text } from "react-native"
import Header from "../components/Header"
import tw from 'tailwind-react-native-classnames';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const HomeScreen = (props) => {
   // const tw = useTailwind()

   console.log(faSearch)
   return <SafeAreaView>
      <Header title="Home" icon={[faSearch]}/>
      <Text style={tw`text-red-400`}>a</Text>
   </SafeAreaView>
}

export default HomeScreen