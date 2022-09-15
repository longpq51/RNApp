import {faCircleDot} from '@fortawesome/free-regular-svg-icons';
import {faDotCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import BtnUI from '../../components/BtnUI';
import GoBackBtn from '../../components/buttons/GobackBtn';
import ShareBtn from '../../components/buttons/ShareBtn';
import WishlistBtn from '../../components/buttons/WishlistBtn';
import ArtistList from '../../components/playlist/ArtistList';
import PlaylistSpotifyItem from '../../components/playlist/PlaylistSpotifyItem';
import Title from '../../components/Title';
import usePlayPlaylist from '../../hooks/playlist/usePlayPlaylist';
import useGetAlbumById from '../../hooks/spotify/useGetAlbumById';
import usePlayingAlbum from '../../hooks/spotify/usePLayingAlbum';
import useAudio from '../../hooks/useAudio';
import useConvertObject from '../../hooks/useConvertObject';
import {isShowMiniPlayerSelector} from '../../store/selectors';

const AlbumScreen = props => {
  const route = useRoute();
  const {item} = route.params;
  const img = item.images[0].url;
  const artists = item.artists;
  const tracks =
    item.tracks !== undefined ? item.tracks.items : useGetAlbumById(item.id);

  const fn = useConvertObject();
  const tracksAfter = tracks.map(i => fn(i, item.images[0].url));

  const {
    dispatchPlayPlaylist,
    dispatchAudioPlaying,
    dispatchIsShowModalPlayer,
  } = usePlayPlaylist();

  const isShowMiniPlayer = useSelector(isShowMiniPlayerSelector);
  const {PlayingAlbum, dispatchPlayingAlbum} = usePlayingAlbum();

  return (
    <SafeAreaView style={tw`${!isShowMiniPlayer ? 'h-full' : 'h-5/6'}`}>
      <GoBackBtn />

      <ScrollView>
        <View style={tw`justify-center w-full`}>
          <Image
            source={{uri: item.images[0].url}}
            style={tw`max-w-full h-64 mx-20 my-10 rounded-lg drop-shadow-xl`}
          />
          <View style={tw`items-center w-full`}>
            <View style={tw`w-2/3 items-center`}>
              <Title title={item.name} size="text-xl" />
            </View>
            <View style={tw`flex-row justify-center w-3/4 items-center`}>
              <Text style={tw`capitalize`}>{item.album_type}</Text>
              <FontAwesomeIcon icon={faCircleDot} style={tw`mx-2`} />
              <View>
                <ArtistList data={artists} />
              </View>
            </View>
          </View>

          <View style={tw`flex-row items-center justify-evenly w-full my-10`}>
            <ShareBtn />
            <BtnUI
              text="Phát nhạc"
              onPress={() => {
                dispatchAudioPlaying(tracksAfter);
                dispatchIsShowModalPlayer(true);
                dispatchPlayingAlbum(tracksAfter);
              }}
            />
            <WishlistBtn type="album" item={item} />
          </View>

          <View style={tw`flex-row justify-between mx-3 mb-3`}>
            <Title title="Danh sách bài hát" />
            <Text>{tracks.length} bài hát</Text>
          </View>
          <FlatList
            data={tracks}
            keyExtractor={key => key.id}
            renderItem={({item, index}) => (
              <PlaylistSpotifyItem item={item} index={index + 1} img={img} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AlbumScreen;
