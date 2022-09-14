import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useState} from 'react';
import {instance} from '../../../services/serviceSpotify';

const useSaveTrack = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('token').then(res => {
      setToken(res);
    });
  }, []);

  const fn = id => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      params: {
        ids: id,
      },
      data: {
        ids: [id],
      },
    };

    console.log({token, id});

    instance
      .request(`me/tracks`, options)
      .then(res => setTracks(res))
      .catch(err => console.log(err.response.data));
  };

  return fn;
};

export default useSaveTrack;
