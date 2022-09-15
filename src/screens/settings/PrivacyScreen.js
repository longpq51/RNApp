import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import WebView from 'react-native-webview';
import tw from 'tailwind-react-native-classnames';
import HeaderAccountStack from '../../components/HeaderAccountStack';

const PrivacyScreen = () => {
  return (
    <SafeAreaView>
      <HeaderAccountStack title="Chính sách bảo mật" />
      <ScrollView style={tw``}>
        <WebView
          source={{uri: 'https://zingmp3.vn/privacy.html'}}
          style={{height: 600}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyScreen;
