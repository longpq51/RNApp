import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {instance} from '../../../services/serviceSpotify';

const useGetSaveTracks = () => {
  const [token, setToken] = useState('');
  const [tracks, setTracks] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };

  useEffect(() => {
    const fn = async () => {
      await AsyncStorage.getItem('token').then(res => setToken(res));
      await instance
        .request(`me/tracks`, options)
        .then(res => setTracks(res))
        .catch(err => console.log(err.response.data));
    };
    fn();
  }, [token]);

  return tracks;
};

export default useGetSaveTracks;
