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
import ModalSearch from '../../components/ModalSearch';
import Albums from '../../components/albums/Albums';
import {images} from '../../assets/images';
import Artists from '../../components/artists/Artists';
import useGetAlbums from '../../hooks/spotify/useGetAlbums';
import {useSelector} from 'react-redux';
import {isShowMiniPlayerSelector} from '../../store/selectors';
import Playlist from '../../components/playlist/Playlist';
import useGetArtists from '../../hooks/spotify/useGetArtists';
import ImageSlider from '../../components/ImageSlider';
import useUserInfo from '../../hooks/useUserInfo';
import Title from '../../components/Title';

const HomeScreen = props => {
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();
  const {albumsList} = useGetAlbums();
  const artists = useGetArtists();
  const isShowMiniPlayer = useSelector(isShowMiniPlayerSelector);
  const {userInfo, dispatchSetUserInfo} = useUserInfo();

  return (
    <SafeAreaView style={tw`${!isShowMiniPlayer ? 'h-full' : 'h-5/6'}`}>
      <ModalSearch value={searchValue} setValue={setSearchValue} />
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity onPress={() => navigation.navigate('Tài khoản')}>
          <Image
            style={tw`h-14 w-14 rounded-full ml-2`}
            source={{
              uri: userInfo.avatar,
            }}
          />
        </TouchableOpacity>
        <View style={tw`flex-1`}>
          <Header logo="" icon={[faSearch]} />
        </View>
      </View>
      <ScrollView>
        {/* <ImageSlider /> */}

        <Artists artists={artists} title="Nghệ sĩ nổi bật" />

        <Albums albumsList={albumsList} title="Album nổi bật" />

        <View style={tw`m-3`}>
          <Title title="Nhạc độc quyền" />
        </View>
        <Playlist />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
