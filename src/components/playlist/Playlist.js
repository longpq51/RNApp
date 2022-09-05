import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {tracks, playlists} from '../../../data/index';
import {colors} from '../../assets/colors';
import useChoose from '../../hooks/useChoose';
import useGetPlaylist from '../../hooks/useGetPlaylist';
import PlaylistScreen from '../../screens/PlaylistScreen';

const Playlist = props => {
  const {isChoose, itemIsChoose, choose} = useChoose(playlists);
  const {getPlaylist, playlist} = useGetPlaylist(tracks, playlists);

  return (
    <View style={tw``}>
      <FlatList
        contentContainerStyle={tw`bg-${colors.background} flex-1 justify-evenly p-1`}
        horizontal
        data={playlists}
        keyExtractor={item => item.id}
        renderItem={item => (
          <TouchableOpacity
            style={tw`p-2 px-4 ${
              choose(item) && `bg-${colors.primary}`
            } rounded-md`}
            onPress={() => {
              isChoose(item);
              getPlaylist(item.item.items);
            }}>
            <Text
              style={tw`text-${
                choose(item) ? colors.textColorPrimary : colors.primary
              } ${choose(item) && 'font-bold'}`}>
              {item.item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      <PlaylistScreen data={playlist} />
    </View>
  );
};

export default Playlist;
