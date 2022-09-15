import {FlatList, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ArtistList = props => {
  const {data, color} = props;

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      keyExtractor={key => key.id}
      renderItem={({item, index}) =>
        data.length === 1 ? (
          <Text style={tw`${color}`}>{item.name}</Text>
        ) : index === data.length - 1 ? (
          <Text style={tw`${color}`}>{item.name}</Text>
        ) : (
          <Text style={tw`${color}`}>{item.name}, </Text>
        )
      }
    />
  );
};

export default ArtistList;
