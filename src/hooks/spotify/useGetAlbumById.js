import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {instance} from '../../services/serviceSpotify';

const useGetAlbumById = id => {
  const [album, setAlbum] = useState([]);
  const [token, setToken] = useState('');

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    // params: {
    //   id: id,
    // },
  };

  useEffect(() => {
    console.log(id);
    const fn = async () => {
      await AsyncStorage.getItem('token').then(res => setToken(res));

      await instance
        .request(`albums/${id}`, options)
        .then(res => setAlbum(res.data.tracks.items))
        .catch(err => console.log(err.response.data));
    };
    fn();
  }, [token]);

  return album;
};

export default useGetAlbumById;
