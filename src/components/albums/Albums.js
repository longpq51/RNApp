import {FlatList, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import useGetAlbums from '../../hooks/spotify/useGetAlbums';
import Title from '../Title';
import AlbumItem from './AlbumItem';

const Albums = props => {
  const {albumsList, title} = props;

  return (
    <SafeAreaView style={tw`m-3`}>
      <Title title={title} />
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
