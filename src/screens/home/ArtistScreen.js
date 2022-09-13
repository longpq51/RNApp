import {useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import {ScrollView} from 'react-native-virtualized-view';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import Albums from '../../components/albums/Albums';
import GoBackBtn from '../../components/buttons/GobackBtn';
import PlaylistSpotifyItem from '../../components/playlist/PlaylistSpotifyItem';
import Title from '../../components/Title';
import useGetArtistAlbums from '../../hooks/spotify/artist/useGetArtistAlbums';
import useGetArtistTopTracks from '../../hooks/spotify/artist/useGetArtistTopTrack';
import {isShowMiniPlayerSelector} from '../../store/selectors';

const ArtistScreen = props => {
  const route = useRoute();
  const {artist} = route.params;

  const topTracks = useGetArtistTopTracks(artist.id);
  const albums = useGetArtistAlbums(artist.id);
  const isShowMiniPlayer = useSelector(isShowMiniPlayerSelector);

  return (
    <SafeAreaView style={tw`${!isShowMiniPlayer ? 'h-full' : 'h-5/6'}`}>
      <GoBackBtn />
      <ScrollView>
        <View
          style={tw`flex-row items-center pt-20 bg-${colors.background} px-3 pb-3 m-3 drop-shadow-xl rounded-lg`}>
          <Image
            source={{uri: artist.images[0].url}}
            style={tw`w-24 h-24 rounded-full mr-3 drop-shadow-xl`}
          />
          <View>
            <Title title={artist.name} size="text-3xl" />
            <View style={tw`h-2`}></View>
            <Text>
              <Text style={tw`font-bold text-${colors.primary}`}>
                {artist.followers.total}
              </Text>
              {'  '}
              lượt nghe
            </Text>
          </View>
        </View>

        <View style={tw`mt-5`}>
          <View style={tw`mx-2 mb-2`}>
            <Title title="Phổ biến nhất" />
          </View>
          <FlatList
            data={topTracks}
            keyExtractor={key => key.id}
            renderItem={({item, index}) => (
              <PlaylistSpotifyItem item={item} index={index + 1} />
            )}
          />
        </View>

        <Albums albumsList={albums} title="Album" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistScreen;
