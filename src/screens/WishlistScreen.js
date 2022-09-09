import {FlatList, SafeAreaView, Text, View} from 'react-native';
import LazyLoadFlatList from '@gluons/react-native-lazyload-flatlist';
import tw from 'tailwind-react-native-classnames';
import {tracks} from '../../data';
import WishlistCard from '../components/WishlistCard';
import {useSelector} from 'react-redux';
import {wishlistSelector} from '../store/selectors';

const WishlistScreen = () => {
  const wishlist = useSelector(wishlistSelector);
  console.log(wishlist);

  return (
    <SafeAreaView style={tw`w-full`}>
      {wishlist.length !== 0 ? (
        <LazyLoadFlatList
          itemLimit={4}
          numColumns={2}
          data={wishlist}
          keyExtractor={key => key.id}
          renderItem={item => <WishlistCard item={item.item} />}
        />
      ) : (
        <View style={tw`h-full items-center justify-center`}>
          <Text>Không có bài hát nào</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default WishlistScreen;
