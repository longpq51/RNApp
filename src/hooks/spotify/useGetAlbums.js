import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {instance} from '../../services/serviceSpotify';

const useGetAlbums = () => {
  const [albumsList, setAlbumsList] = useState([]);
  const [token, setToken] = useState('');

  AsyncStorage.getItem('token').then(res => setToken(res));
  const albums = '4nfpHvg7KFcAUTg6yajpvN,4aawyAB9vmqN3uQ7FjRGTy';

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
    instance
      .request(`albums`, options)
      .then(res => setAlbumsList(res.data.albums))
      .catch(err => console.log(err.response.data));
  }, []);

  return {
    albumsList,
    // getAlbums,
  };
};

export default useGetAlbums;
