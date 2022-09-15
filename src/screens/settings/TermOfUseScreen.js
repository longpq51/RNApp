import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import WebView from 'react-native-webview';
import tw from 'tailwind-react-native-classnames';
import HeaderAccountStack from '../../components/HeaderAccountStack';

const TermOfUseScreen = () => {
  return (
    <SafeAreaView>
      <HeaderAccountStack title="Điều khoản sử dụng" />
      <ScrollView style={tw`h-full`}>
        <WebView
          source={{uri: 'https://mp3.zing.vn/tnc'}}
          style={{height: 600}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermOfUseScreen;
