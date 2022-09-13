import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';
import {instance} from '../../../services/serviceSpotify';

const useGetArtistAlbums = id => {
  const [albumsList, setAlbumsList] = useState([]);
  const [token, setToken] = useState('');

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    // params: {
    //   ids: albums,
    // },
  };

  useEffect(() => {
    const fn = async () => {
      await AsyncStorage.getItem('token').then(res => setToken(res));
      await instance
        .request(`artists/${id}/albums`, options)
        .then(res => setAlbumsList(res.data.items))
        .catch(err => console.log(err.response.data));
    };
    fn();
    return () => setAlbumsList([]);
  }, [token]);

  return albumsList;
};

export default useGetArtistAlbums;
