import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import tw from 'tailwind-react-native-classnames';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ModalSearch from '../components/ModalSearch';
import {images} from '../assets/images';

const HomeScreen = props => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SafeAreaView>
      <ModalSearch value={searchValue} setValue={setSearchValue} />
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity>
          <Image
            style={tw`h-14 w-14 rounded-full ml-2`}
            source={{
              uri: images.accDefault,
            }}
          />
        </TouchableOpacity>
        <View style={tw`flex-1`}>
          <Header logo="" icon={[faSearch]} />
        </View>
      </View>
      <Text style={tw`text-red-400`}>a</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
