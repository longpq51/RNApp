import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useState} from 'react';
import {instance} from '../../../services/serviceSpotify';

const useGetShow = () => {
  const [shows, setShows] = useState([]);
  const [token, setToken] = useState('');

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    params: {
      ids: '6gmBOqPqNAEJVWZRug356a',
    },
  };

  useEffect(() => {
    const fn = async () => {
      await AsyncStorage.getItem('token').then(res => setToken(res));

      await instance
        .request(`shows`, options)
        .then(res => setShows(res))
        .catch(err => console.log(err.response.data));
    };
    fn();
  }, [token]);

  return shows;
};

export default useGetShow;
