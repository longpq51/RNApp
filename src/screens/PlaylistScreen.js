import {FlatList} from 'react-native';
import PlaylistItem from '../components/playlist/PlaylistItem';
import {ScrollView} from 'react-native-virtualized-view';
import {useSelector} from 'react-redux';
import {isShowMiniPlayerSelector} from '../store/selectors';

const PlaylistScreen = props => {
  const {data} = props;
  const isShowMiniPlayer = useSelector(isShowMiniPlayerSelector);

  return (
    <FlatList
      scrollEnabled
      data={data}
      keyExtractor={item => item[0].id}
      renderItem={item => <PlaylistItem data={item} />}
    />
  );
};

export default PlaylistScreen;
