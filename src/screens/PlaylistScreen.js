import {FlatList, Text, View} from 'react-native';
import PlaylistItem from '../components/playlist/PlaylistItem';

const PlaylistScreen = props => {
  const {data} = props;

  console.log(props);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item[0].id}
        renderItem={item => <PlaylistItem data={item} />}
      />
    </View>
  );
};

export default PlaylistScreen;
