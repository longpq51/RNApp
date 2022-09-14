import {FlatList, SafeAreaView, Text, View} from 'react-native';
import LazyLoadFlatList from '@gluons/react-native-lazyload-flatlist';
import tw from 'tailwind-react-native-classnames';
import {useSelector} from 'react-redux';
import {
  isShowMiniPlayerSelector,
  wishlistSelector,
} from '../../store/selectors';
import {ScrollView} from 'react-native-virtualized-view';
import WishlistCard from '../../components/WishlistCard';

const WishlistScreen = () => {
  const wishlist = useSelector(wishlistSelector);
  const isShowMiniPlayer = useSelector(isShowMiniPlayerSelector);

  return (
    <SafeAreaView style={tw`w-full`}>
      <ScrollView style={tw`${isShowMiniPlayer ? 'h-5/6' : 'h-full'}`}>
        {wishlist.length !== 0 ? (
          <LazyLoadFlatList
            itemLimit={4}
            numColumns={2}
            data={wishlist}
            keyExtractor={key => key.id}
            renderItem={item => <WishlistCard item={item.item} />}
          />
        ) : (
          <View style={tw`h-96 items-center justify-center`}>
            <Text>Không có bài hát nào</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishlistScreen;
