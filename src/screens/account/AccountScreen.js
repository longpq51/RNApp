import {faCartShopping, faList} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AccountHeader from '../../components/AccountHeader';
import AccountItem from '../../components/AccountItem';
import Info from '../../components/information/Info';
import useGetUser from '../../hooks/spotify/user/useGetUser';

const AccountScreen = props => {
  const navigation = useNavigation();

  const info = useGetUser();
  console.log(info);

  return (
    <SafeAreaView>
      <AccountHeader />
      <View style={tw`flex flex-row`}>
        <AccountItem
          title="Playlist"
          icon={faList}
          onPress={() => navigation.navigate('ControlPlaylist')}
        />
        <AccountItem title="Bài hát" icon={faCartShopping} />
      </View>
      <Info />
    </SafeAreaView>
  );
};

export default AccountScreen;
