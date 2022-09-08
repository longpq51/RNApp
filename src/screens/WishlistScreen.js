import {FlatList, SafeAreaView, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {tracks} from '../../data';
import WishlistCard from '../components/WishlistCard';

const WishlistScreen = () => {
  return (
    <SafeAreaView style={tw`w-full bg-white`}>
      <FlatList
        numColumns={2}
        data={tracks}
        keyExtractor={key => key.id}
        renderItem={item => <WishlistCard item={item.item} />}
      />
    </SafeAreaView>
  );
};

export default WishlistScreen;
