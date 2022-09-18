import {faAdd, faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import useAddToPlaylist from '../../hooks/playlist/useAddToPlaylist';
import PlaylistScreen from '../../screens/PlaylistScreen';
import {tracks, playlists} from '../../../data/index';
import {useState} from 'react';
import PlaylistItem from '../playlist/PlaylistItem';
import CloseBtn from './CloseBtn';
import {colors} from '../../assets/colors';
import useIsChoose from '../../hooks/playlist/useIsChoose';
import useDeleteFromPlaylist from '../../hooks/playlist/useDeleteFromPlaylist';
import InputItem from '../InputItem';
import useSearchSpotify from '../../hooks/spotify/useSearchSpotify';
import PlaylistSpotifyItem from '../playlist/PlaylistSpotifyItem';
import useConvertObject from '../../hooks/useConvertObject';

const AddAudioBtn = props => {
  const {name} = props;
  const [isShowModal, setIsShowModal] = useState(false);
  const {audioList, dispatchAddToPlaylist} = useAddToPlaylist(name);
  const {dispatchDeleteFromPlaylist} = useDeleteFromPlaylist();
  const check = useIsChoose(audioList);

  const [searchText, setSearchText] = useState('');

  const {searchData, search, setSearchData} = useSearchSpotify();
  const fn = useConvertObject();

  return (
    <View>
      <TouchableOpacity
        style={tw`items-center`}
        onPress={() => {
          setIsShowModal(true);
        }}>
        <FontAwesomeIcon icon={faAdd} size={20} />
        <Text style={tw`text-xs`}>Thêm bài</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={isShowModal}>
        <SafeAreaView style={tw`bg-white h-full p-2`}>
          <CloseBtn onPress={() => setIsShowModal(false)} />

          <View style={tw`mb-2`}>
            <InputItem
              setSearchData={setSearchData}
              fn={search}
              placeholder="Nhập từ khoá tìm kiếm..."
              value={searchText}
              setValue={setSearchText}
            />
          </View>

          {searchData.data !== undefined && (
            <FlatList
              data={searchData.data.tracks.items}
              keyExtractor={key => key.id}
              renderItem={item => (
                <View style={tw`flex-row items-center justify-between`}>
                  <PlaylistItem
                    data={fn(item.item)}
                    type=""
                    setIsShowModal={setIsShowModal}
                  />
                  {/* <PlaylistSpotifyItem
                    item={item.item}
                    index={item.index + 1}
                  /> */}
                  {check(item.item) === undefined && (
                    <TouchableOpacity
                      onPress={() => {
                        dispatchAddToPlaylist({
                          namePlaylist: name,
                          data: fn(item.item),
                        });
                        // check(item.item) !== undefined &&
                        //   dispatchDeleteFromPlaylist({
                        //     namePlaylist: name,
                        //     data: fn(item.item),
                        //   });
                      }}
                      style={tw`border border-2 border-${colors.primary} p-3 mr-3 rounded-full`}>
                      <FontAwesomeIcon
                        icon={faAdd}
                        style={tw`text-${colors.primary}`}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              )}
            />
          )}
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default AddAudioBtn;
