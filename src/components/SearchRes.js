import {FlatList, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import useDebounce from '../hooks/useDebounce';
import Albums from './albums/Albums';
import Artists from './artists/Artists';
import PlaylistSpotifyItem from './playlist/PlaylistSpotifyItem';
import Title from './Title';

const SearchRes = props => {
  const {searchData, value, fn} = props;

  //   let debounced = useDebounce(value, 300);

  //   useEffect(() => {
  //     fn(debounced);
  //   }, [value]);

  return (
    <View>
      <Artists artists={searchData.data.artists.items} title="Nghệ sĩ" />
      <Albums albumsList={searchData.data.albums.items} title="Albums" />
      <View style={tw`mx-3 mb-3`}>
        <Title title="Bài hát" />
      </View>
      <FlatList
        data={searchData.data.tracks.items}
        keyExtractor={key => key.id}
        renderItem={({item, index}) => (
          <PlaylistSpotifyItem item={item} index={index + 1} />
        )}
      />
    </View>
  );
};

export default SearchRes;
