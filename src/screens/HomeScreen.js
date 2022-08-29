import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Header from '../components/Header';
import tw from 'tailwind-react-native-classnames';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ModalSearch from '../components/ModalSearch';

const HomeScreen = props => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SafeAreaView>
      <ModalSearch value={searchValue} setValue={setSearchValue} />
      <Header title="Home" icon={[faSearch]} />
      <Text style={tw`text-red-400`}>a</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
