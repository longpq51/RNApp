import {useEffect} from 'react';
import {Text, View} from 'react-native';
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

  return <View></View>;
};

export default ImageSlider;
