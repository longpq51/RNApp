import {faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import {setModalSearchVisible} from '../store/actions';
import {modalSearchVisibleSelector} from '../store/selectors';
import ArtistItem from './ArtistItem';
import InputItem from './InputItem';
import PlaylistItem from './playlist/PlaylistItem';

const ModalSearch = props => {
  const {value, setValue} = props;

  const [searchList, setSearchList] = useState([]);
  const [searchArtistList, setSearchArtistList] = useState([]);

  const modalSearchVisible = useSelector(modalSearchVisibleSelector);
  const dispatchRedux = useDispatch();
  const dispatchModalSearchVisible = data => {
    dispatchRedux(setModalSearchVisible(data));
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalSearchVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalSearchVisible);
      }}>
      <SafeAreaView style={tw`bg-white flex-1 w-full`}>
        <View style={tw`flex flex-row items-center mx-2`}>
          <View style={tw`flex-1`}>
            <InputItem
              setSearchArtistList={setSearchArtistList}
              setSearchList={setSearchList}
              placeholder="Nhập từ khoá tìm kiếm..."
              value={value}
              setValue={setValue}
            />
          </View>
          <TouchableOpacity
            style={tw`mt-2 text-${colors.primary} ml-2`}
            onPress={() => dispatchModalSearchVisible(false)}>
            <FontAwesomeIcon
              icon={faClose}
              size={30}
              color={colors.rgbPrimary}
            />
          </TouchableOpacity>
        </View>

        <Text style={tw`font-bold text-${colors.primary} ml-3 mt-5`}>
          Danh sách tìm kiếm
        </Text>

        {searchArtistList.length > 0 && value.length > 0 && (
          <View>
            <FlatList
              contentContainerStyle={tw`h-20 w-full items-center`}
              horizontal
              data={searchArtistList}
              keyExtractor={key => key.id}
              renderItem={item => <ArtistItem item={item.item} />}
            />
          </View>
        )}

        {searchList.length > 0 && value.length > 0 ? (
          <ScrollView style={tw`w-full h-2/3`}>
            <FlatList
              data={searchList}
              keyExtractor={key => key.id}
              renderItem={item => (
                <PlaylistItem
                  data={item}
                  modalVisible={dispatchModalSearchVisible}
                />
              )}
            />
          </ScrollView>
        ) : (
          <View style={tw`flex-1 items-center justify-center`}>
            <Text>Không có bài hát nào</Text>
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
};

export default ModalSearch;
