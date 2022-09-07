import {useRoute} from '@react-navigation/native';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import BtnUI from '../../components/BtnUI';
import AddAudioBtn from '../../components/buttons/AddAudioBtn';
import ShareBtn from '../../components/buttons/ShareBtn';
import HeaderAccountStack from '../../components/HeaderAccountStack';
import PlaylistItem from '../../components/playlist/PlaylistItem';
import {playlistSelector} from '../../store/selectors';
import {SwipeListView} from 'react-native-swipe-list-view';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import useDeleteFromPlaylist from '../../hooks/playlist/useDeleteFromPlaylist';
import usePlayPlaylist from '../../hooks/playlist/usePlayPlaylist';
import TrackPlayer from 'react-native-track-player';
import useGetAudioList from '../../hooks/playlist/useGetAudioList';

const AudioListScreen = props => {
  const route = useRoute();
  const {name} = route.params;
  const {dispatchDeleteFromPlaylist} = useDeleteFromPlaylist();
  const {
    dispatchPlayPlaylist,
    dispatchAudioPlaying,
    dispatchIsShowModalPlayer,
  } = usePlayPlaylist();

  // console.log(playlist);
  const audioList = useGetAudioList(name);

  return (
    <SafeAreaView>
      <HeaderAccountStack />
      <View style={tw`h-1/4 items-center justify-center`}>
        <Text style={tw`text-2xl font-bold mb-5`}>{name}</Text>
        <View style={tw`flex-row items-center justify-evenly w-full`}>
          <ShareBtn />
          <BtnUI
            text="Phát nhạc"
            onPress={() => {
              // TrackPlayer.getCurrentTrack().then(i =>
              //   dispatchAudioPlaying(audioList[i]),
              // );
              dispatchAudioPlaying(audioList[0]);
              dispatchIsShowModalPlayer(true);
              dispatchPlayPlaylist({name: name, type: true});
            }}
          />
          <AddAudioBtn name={name} />
        </View>
      </View>

      <View style={tw`m-3`}>
        <Text style={tw`font-bold mb-3`}>Danh sách bài hát</Text>
        {audioList.length === 0 ? (
          <View style={tw`w-full items-center my-32`}>
            <Text>Không có bài hát nào</Text>
          </View>
        ) : (
          <ScrollView style={tw`h-96`}>
            <SwipeListView
              data={audioList}
              keyExtractor={key => key.id}
              renderItem={item => <PlaylistItem data={item} />}
              renderHiddenItem={(data, rowMap) => (
                <View
                  style={tw`w-full h-full items-center justify-end flex-row`}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatchDeleteFromPlaylist({
                        namePlaylist: name,
                        data: data.item,
                      });
                    }}
                    style={tw`mr-3 bg-red-400 w-16 my-3 items-center justify-center h-3/4 rounded-full`}>
                    <FontAwesomeIcon icon={faTrash} size={20} />
                  </TouchableOpacity>
                </View>
              )}
              rightOpenValue={-75}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AudioListScreen;
