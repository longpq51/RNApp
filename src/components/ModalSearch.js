import {faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect, useState} from 'react';
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
import useSearchSpotify from '../hooks/spotify/useSearchSpotify';
import useDebounce from '../hooks/useDebounce';
import {setModalSearchVisible} from '../store/actions';
import {modalSearchVisibleSelector} from '../store/selectors';
import Albums from './albums/Albums';
import Artists from './artists/Artists';
import InputItem from './InputItem';
import PlaylistSpotifyItem from './playlist/PlaylistSpotifyItem';
import SearchRes from './SearchRes';
import Title from './Title';

const ModalSearch = props => {
  const {value, setValue} = props;

  // const [searchList, setSearchList] = useState([]);
  // const [searchArtistList, setSearchArtistList] = useState([]);

  const modalSearchVisible = useSelector(modalSearchVisibleSelector);
  const dispatchRedux = useDispatch();
  const dispatchModalSearchVisible = data => {
    dispatchRedux(setModalSearchVisible(data));
  };

  const {searchData, fn} = useSearchSpotify();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalSearchVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalSearchVisible);
      }}>
      <SafeAreaView style={tw`bg-gray-100 flex-1 w-full`}>
        <View style={tw`flex flex-row items-center mx-2`}>
          <View style={tw`flex-1`}>
            <InputItem
              fn={fn}
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
        <ScrollView>
          <Text style={tw`font-bold text-${colors.primary} ml-3 mt-5`}>
            Danh sách tìm kiếm
          </Text>

          {searchData.data !== undefined ? (
            <SearchRes searchData={searchData} value={value} fn={fn} />
          ) : (
            <View>
              <Text>Không có kết quả nào</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalSearch;
