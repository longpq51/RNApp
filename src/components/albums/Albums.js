import {FlatList, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import useGetAlbums from '../../hooks/spotify/useGetAlbums';
import Title from '../Title';
import AlbumItem from './AlbumItem';

const Albums = () => {
  const {albumsList} = useGetAlbums();

  return (
    <SafeAreaView style={tw`m-2`}>
      <Title title="Album nổi bật" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={albumsList}
        keyExtractor={key => key.id}
        renderItem={item => <AlbumItem item={item.item} />}
      />
    </SafeAreaView>
  );
};

export default Albums;
