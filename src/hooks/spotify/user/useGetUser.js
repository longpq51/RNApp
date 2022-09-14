import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {useEffect} from 'react';
import {instance} from '../../../services/serviceSpotify';

const useGetUser = () => {
  const [token, setToken] = useState('');
  const [info, setInfo] = useState({});

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
        .request(`me`, options)
        .then(res => setInfo(res))
        .catch(err => console.log(err.response.data));
    };
    fn();
  }, [token]);

  return info;
};

export default useGetUser;
