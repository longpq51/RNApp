import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import WishlistAlbumItem from '../../components/WishlistAlbumItem';
import {wishlistAlbumSelector} from '../../store/selectors';

const WishlistAlbumScreen = () => {
  const wishlistAlbum = useSelector(wishlistAlbumSelector);
  console.log(wishlistAlbum);

  return (
    <SafeAreaView>
      {wishlistAlbum.length !== 0 ? (
        <FlatList
          data={wishlistAlbum}
          keyExtractor={key => key.id}
          renderItem={item => <WishlistAlbumItem item={item.item} />}
        />
      ) : (
        <View style={tw`h-96 items-center justify-center`}>
          <Text>Không có album nào</Text>
        </View>
      )}
      {/* <Albums albumsList={wishlistAlbum} /> */}
    </SafeAreaView>
  );
};

export default WishlistAlbumScreen;
