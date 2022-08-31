import {faCartShopping, faList} from '@fortawesome/free-solid-svg-icons';
import {SafeAreaView, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AccountHeader from '../components/AccountHeader';
import AccountItem from '../components/AccountItem';
import Info from '../components/information/Info';

const AccountScreen = props => {
  return (
    <SafeAreaView>
      <AccountHeader />
      <View style={tw`flex flex-row`}>
        <AccountItem title="Sản phẩm đã mua" icon={faList} />
        <AccountItem title="Giỏ hàng" icon={faCartShopping} />
      </View>
      <Info />
    </SafeAreaView>
  );
};

export default AccountScreen;
