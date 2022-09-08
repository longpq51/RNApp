import {useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import ArtistModal from './ArtistModal';

const ArtistItem = props => {
  const {item} = props;
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <TouchableOpacity
      style={tw`w-20 justify-center items-center m-3`}
      onPress={() => setIsShowModal(true)}>
      <Image source={item.artwork} style={tw`h-12 w-12 rounded-full`} />
      <Text numberOfLines={1} style={tw`text-center`}>
        {item.artist}
      </Text>

      <ArtistModal
        item={item}
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      />
    </TouchableOpacity>
  );
};

export default ArtistItem;
