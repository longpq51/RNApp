import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {instance} from '../../services/serviceSpotify';

const useGetAlbums = () => {
  const [albumsList, setAlbumsList] = useState([]);
  const [token, setToken] = useState('');

  const albums =
    '4nfpHvg7KFcAUTg6yajpvN,4aawyAB9vmqN3uQ7FjRGTy,0VcUiF3nAK2UWeWpRzESob,7qIYRB5Hx88CJaj1Lx8EVN,6wDnpetqcsDPZpD0lDlqyj,2dZsaSnVn5i5uBg6FnhUVV';

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    params: {
      ids: albums,
    },
  };

  useEffect(() => {
    const fn = async () => {
      await AsyncStorage.getItem('token').then(res => setToken(res));

      await instance
        .request(`albums`, options)
        .then(res => setAlbumsList(res.data.albums))
        .catch(err => console.log(err.response.data));
    };
    fn();
  }, [token]);

  return {
    albumsList,
    // getAlbums,
  };
};

export default useGetAlbums;
