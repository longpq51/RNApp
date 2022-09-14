import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {deleteWishlistAlbum} from '../store/actions';
import TrashBtn from './buttons/TrashBtn';
import ArtistList from './playlist/ArtistList';
import Title from './Title';

const WishlistAlbumItem = props => {
  const {item} = props;
  console.log(item);

  const navigation = useNavigation();

  const dispatchRedux = useDispatch();
  const dispatchDeleteWishlistAlbum = data => {
    dispatchRedux(deleteWishlistAlbum(data));
  };

  return (
    <TouchableOpacity
      style={tw`bg-white m-3 rounded-lg shadow-lg`}
      onPress={() => navigation.navigate('Album', {item: item})}>
      <Image
        source={{uri: item.images[0].url}}
        style={tw`w-full h-64 rounded-t-lg`}
      />
      <View style={tw`flex-row items-center justify-between m-3`}>
        <View>
          <Title title={item.name} size="text-2xl" />
          <ArtistList data={item.artists} />
        </View>
        <TrashBtn onPress={() => dispatchDeleteWishlistAlbum(item)} />
      </View>
    </TouchableOpacity>
  );
};

export default WishlistAlbumItem;
