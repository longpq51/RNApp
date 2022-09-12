import {faCircleDot} from '@fortawesome/free-regular-svg-icons';
import {faDotCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import BtnUI from '../../components/BtnUI';
import AddAudioBtn from '../../components/buttons/AddAudioBtn';
import GoBackBtn from '../../components/buttons/GobackBtn';
import ShareBtn from '../../components/buttons/ShareBtn';
import WishlistBtn from '../../components/buttons/WishlistBtn';
import PlaylistItem from '../../components/playlist/PlaylistItem';
import PlaylistSpotifyItem from '../../components/playlist/PlaylistSpotifyItem';
import Title from '../../components/Title';
import usePlayPlaylist from '../../hooks/playlist/usePlayPlaylist';
import useConvertObject from '../../hooks/useConvertObject';

const AlbumScreen = props => {
  const route = useRoute();
  const {item} = route.params;
  const artists = item.artists;
  const tracks = item.tracks.items;

  const fn = useConvertObject();
  const tracksAfter = tracks.map(item => fn(item));
  console.log(tracksAfter);

  const {
    dispatchPlayPlaylist,
    dispatchAudioPlaying,
    dispatchIsShowModalPlayer,
  } = usePlayPlaylist();

  return (
    <SafeAreaView>
      <GoBackBtn />

      <ScrollView>
        <View style={tw`justify-center w-full`}>
          <Image
            source={{uri: item.images[0].url}}
            style={tw`max-w-full h-64 mx-20 my-10 rounded-lg drop-shadow-xl`}
          />
          <View style={tw`items-center w-full`}>
            <Title title={item.name} size="text-xl" />
            <View style={tw`flex-row justify-center w-1/2 justify-center`}>
              <Text style={tw`capitalize`}>{item.album_type}</Text>
              <FontAwesomeIcon icon={faCircleDot} style={tw`mx-2`} />
              <View>
                <FlatList
                  horizontal
                  data={artists}
                  keyExtractor={key => key.id}
                  renderItem={item => <Text>{item.item.name}</Text>}
                />
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
                dispatchPlayPlaylist({name: '', type: true});
              }}
            />
            <WishlistBtn />
          </View>

          <View style={tw`flex-row justify-between mx-3 mb-3`}>
            <Title title="Danh sách bài hát" />
            <Text>{tracks.length} bài hát</Text>
          </View>
          <FlatList
            data={tracks}
            keyExtractor={key => key.id}
            renderItem={item => <PlaylistSpotifyItem item={item.item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AlbumScreen;
