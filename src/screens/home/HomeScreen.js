import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import Header from '../../components/Header';
import Playlist from '../../components/playlist/Playlist';
import ModalSearch from '../../components/ModalSearch';
import Albums from '../../components/albums/Albums';
import ArtistItem from '../../components/ArtistItem';
import {images} from '../../assets/images';
import {tracks} from '../../../data';

const HomeScreen = props => {
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ModalSearch value={searchValue} setValue={setSearchValue} />
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity onPress={() => navigation.navigate('Tài khoản')}>
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
      <ScrollView>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={tracks}
          keyExtractor={key => key.id}
          renderItem={item => <ArtistItem item={item.item} />}
        />

        <Albums />

        <Playlist />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;