import {faAdd} from '@fortawesome/free-solid-svg-icons';
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

const AddAudioBtn = props => {
  const {name, item} = props;
  const [isShowModal, setIsShowModal] = useState(false);
  const {audioList, dispatchAddToPlaylist} = useAddToPlaylist(name);

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
        <SafeAreaView style={tw`bg-white`}>
          <CloseBtn onPress={() => setIsShowModal(false)} />
          <FlatList
            data={tracks}
            keyExtractor={key => key.id}
            renderItem={item => (
              <View style={tw`flex-row items-center justify-between`}>
                <PlaylistItem data={item} />
                <TouchableOpacity
                  onPress={() => {
                    dispatchAddToPlaylist({
                      namePlaylist: name,
                      data: item.item,
                    });
                    console.log(audioList);
                  }}
                  style={tw`border border-2 border-${colors.primary} p-3 mr-3 rounded-full`}>
                  <FontAwesomeIcon
                    icon={faAdd}
                    style={tw`text-${colors.primary}`}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default AddAudioBtn;