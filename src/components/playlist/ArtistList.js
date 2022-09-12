import {FlatList, Text} from 'react-native';

const ArtistList = props => {
  const {data} = props;

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={key => key.id}
      renderItem={({item, index}) =>
        data.length === 1 ? (
          <Text>{item.name}</Text>
        ) : index === data.length - 1 ? (
          <Text>{item.name}</Text>
        ) : (
          <Text>{item.name}, </Text>
        )
      }
    />
  );
};

export default ArtistList;
