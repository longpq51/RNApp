import {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import useGetArtists from '../../hooks/spotify/useGetArtists';
import Title from '../Title';
import ArtistSpotifyItem from './ArtistSpotifyItem';

const Artists = props => {
  const {artists, title} = props;

  return (
    <View style={tw`m-3`}>
      <Title title={title} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={artists}
        keyExtractor={key => key.id}
        renderItem={item => <ArtistSpotifyItem artist={item} />}
      />
    </View>
  );
};

export default Artists;
