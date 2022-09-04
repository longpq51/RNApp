import {FlatList, ScrollView, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import PlaylistItem from '../components/playlist/PlaylistItem';

const PlaylistScreen = props => {
  const {data} = props;

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
