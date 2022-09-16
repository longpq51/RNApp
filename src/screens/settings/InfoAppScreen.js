import {SafeAreaView, View} from 'react-native';
import WebView from 'react-native-webview';
import tw from 'tailwind-react-native-classnames';
import HeaderAccountStack from '../../components/HeaderAccountStack';

const InfoAppScreen = () => {
  return (
    <SafeAreaView>
      <HeaderAccountStack title="Thông tin ứng dụng" />
      <View style={tw`h-full`}>
        <WebView
          source={{uri: 'https://www.youtube.com/'}}
          style={{height: 600}}
        />
      </View>
    </SafeAreaView>
  );
};

export default InfoAppScreen;
