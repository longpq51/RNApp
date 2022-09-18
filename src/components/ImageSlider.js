import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {colors} from '../assets/colors';
import useGetAlbums from '../hooks/spotify/useGetAlbums';

const ImageSlider = () => {
  const {albumsList} = useGetAlbums();
  const [imagesList, setImagesList] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const images = [];

    albumsList !== undefined &&
      albumsList.map(item => {
        images.push(item.images[0].url);
      });

    setImagesList(images);
    console.log({albumsList, imagesList});
  }, [albumsList]);

  return (
    <View>
      <SliderBox
        images={imagesList}
        autoplay={true}
        circleLoop={true}
        inactiveDotColor="white"
        ImageComponentStyle={{
          borderRadius: 10,
          width: '95%',
          // flex: 0.5,
        }}
        onCurrentImagePressed={index => {
          navigation.navigate('Album', {item: albumsList[index]});
        }}
        dotColor={colors.rgbPrimary}
        sliderBoxHeight={300}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        // paginationBoxStyle={{
        //   position: 'relative',
        //   bottom: 0,
        //   padding: 0,
        //   alignItems: 'center',
        //   alignSelf: 'center',
        //   justifyContent: 'center',
        //   paddingVertical: 10,
        // }}
      />
    </View>
  );
};

export default ImageSlider;
