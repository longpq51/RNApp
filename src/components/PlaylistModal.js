import {useSelector} from 'react-redux';
import {playlistSelector, playPlaylistSelector} from '../store/selectors';
import {ScrollView} from 'react-native-virtualized-view';
import {FlatList, Modal, SafeAreaView, View} from 'react-native';
import PlaylistItem from './playlist/PlaylistItem';
import CloseBtn from './buttons/CloseBtn';
import tw from 'tailwind-react-native-classnames';

const PlaylistModal = props => {
  const {isShowPlaylistModal, setIsShowPlaylistModal} = props;
  const playlist = useSelector(playlistSelector);
  const playPlaylist = useSelector(playPlaylistSelector);

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
                playlist[0].filter(item => item.name === playPlaylist.name)[0]
                  .data
              }
              keyExtractor={key => key.id}
              renderItem={item => <PlaylistItem data={item} />}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default PlaylistModal;
