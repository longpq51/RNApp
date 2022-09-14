import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import useGetAlbums from '../hooks/spotify/useGetAlbums';

const ImageSlider = () => {
  const {albumList} = useGetAlbums();
  console.log(albumList);

  const images = [];

  useEffect(() => {
    // albumList.length > 0 &&
    albumList !== undefined &&
      albumList.map(item => images.push(item.images[0].url));
  }, []);

  return (
    <View>
      <SliderBox images={images} />
      {/* <Text>Slider</Text> */}
    </View>
  );
};

export default ImageSlider;
