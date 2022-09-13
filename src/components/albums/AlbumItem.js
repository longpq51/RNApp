import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import useShowSearchModal from '../../hooks/useShowSearchModal';
import ArtistList from '../playlist/ArtistList';
import Title from '../Title';

const AlbumItem = props => {
  const {item} = props;
  const navigation = useNavigation();
  const artists = item.artists;

  const {isShowSearchModal, dispatchShowSearchModal} = useShowSearchModal();

  return (
    <TouchableOpacity
      style={tw`m-3 bg-${colors.textColor} rounded-lg`}
      onPress={() => {
        dispatchShowSearchModal(false);
        navigation.navigate('Album', {item: item});
      }}>
      <Image
        source={{uri: item.images[0].url}}
        style={tw`w-52 h-52 rounded-lg`}
      />
      <View style={tw`m-3 w-32`}>
        <Title title={item.name} />
        <ArtistList data={artists} />
      </View>
    </TouchableOpacity>
  );
};

export default AlbumItem;
