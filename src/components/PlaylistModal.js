import {useSelector} from 'react-redux';
import {playlistSelector, playPlaylistSelector} from '../store/selectors';
import {ScrollView} from 'react-native-virtualized-view';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CloseBtn from './buttons/CloseBtn';
import tw from 'tailwind-react-native-classnames';
import usePlayingAlbum from '../hooks/spotify/usePLayingAlbum';
import ArtistList from './playlist/ArtistList';
import {colors} from '../assets/colors';
import {SwipeListView} from 'react-native-swipe-list-view';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import TrackPlayer from 'react-native-track-player';
import useAudio from '../hooks/useAudio';
import WishlistBtn from './buttons/WishlistBtn';

const PlaylistModal = props => {
  const {isShowPlaylistModal, setIsShowPlaylistModal, i} = props;
  const playlist = useSelector(playlistSelector);
  const playPlaylist = useSelector(playPlaylistSelector);
  const {PlayingAlbum, dispatchPlayingAlbum} = usePlayingAlbum();

  const {audio, dispatchAudio} = useAudio();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isShowPlaylistModal}>
      <SafeAreaView style={tw`bg-white flex-1 mt-10 shadow-md`}>
        <View style={tw`p-3`}>
          <CloseBtn onPress={() => setIsShowPlaylistModal(false)} />

          <FlatList
            style={tw`my-5`}
            showsVerticalScrollIndicator={false}
            data={
              playPlaylist.name !== ''
                ? playlist[0].filter(item => item.name === playPlaylist.name)[0]
                    .data
                : PlayingAlbum.length > 0
                ? PlayingAlbum
                : []
            }
            keyExtractor={key => key.id}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  TrackPlayer.skip(index);
                  dispatchAudio(item);
                }}
                style={tw`bg-${
                  audio.id === item.id ? colors.primary : colors.background
                } rounded-lg p-2 mb-2 flex-row items-center justify-between`}>
                <View style={tw`flex-row items-center`}>
                  <Image
                    source={
                      item.artwork.uri !== undefined
                        ? item.artwork
                        : Array.isArray(item.artist)
                        ? require('../assets/logo.png')
                        : item.artwork
                    }
                    style={tw`h-16 w-16 rounded-md mr-3`}
                  />
                  <View style={tw`w-44 justify-center`}>
                    <Text
                      style={tw`font-bold text-lg text-${
                        audio.id !== item.id
                          ? colors.primary
                          : colors.textColorPrimary
                      }`}
                      numberOfLines={1}>
                      {item.title}
                    </Text>
                    {Array.isArray(item.artist) ? (
                      <ArtistList
                        data={item.artist}
                        color={audio.id === item.id ? 'text-white' : ''}
                      />
                    ) : (
                      <Text numberOfLines={1}>{item.artist}</Text>
                    )}
                  </View>
                </View>

                <WishlistBtn item={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PlaylistModal;
