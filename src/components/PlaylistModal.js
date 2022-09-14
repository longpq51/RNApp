import {useSelector} from 'react-redux';
import {playlistSelector, playPlaylistSelector} from '../store/selectors';
import {ScrollView} from 'react-native-virtualized-view';
import {FlatList, Modal, SafeAreaView, View} from 'react-native';
import PlaylistItem from './playlist/PlaylistItem';
import CloseBtn from './buttons/CloseBtn';
import tw from 'tailwind-react-native-classnames';
import usePlayingAlbum from '../hooks/spotify/usePLayingAlbum';
import PlaylistSpotifyItem from './playlist/PlaylistSpotifyItem';

const PlaylistModal = props => {
  const {isShowPlaylistModal, setIsShowPlaylistModal, i} = props;
  console.log(i);
  const playlist = useSelector(playlistSelector);
  const playPlaylist = useSelector(playPlaylistSelector);
  const {PlayingAlbum, dispatchPlayingAlbum} = usePlayingAlbum();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isShowPlaylistModal}>
      <SafeAreaView style={tw`bg-white flex-1 mt-10 shadow-md`}>
        <View style={tw`p-3`}>
          <CloseBtn onPress={() => setIsShowPlaylistModal(false)} />
          <ScrollView>
            <FlatList
              data={
                playPlaylist.name !== ''
                  ? playlist[0].filter(
                      item => item.name === playPlaylist.name,
                    )[0].data
                  : PlayingAlbum.length > 0
                  ? PlayingAlbum
                  : []
              }
              keyExtractor={key => key.id}
              renderItem={({item, index}) =>
                PlayingAlbum.length > 0 ? (
                  <PlaylistSpotifyItem
                    item={item}
                    index={index + 1}
                    img={i.url}
                  />
                ) : (
                  <PlaylistItem data={item} />
                )
              }
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PlaylistModal;
