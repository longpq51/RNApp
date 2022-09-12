import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {CLIENT_ID, CLIENT_SECRET} from '../../services/serviceSpotify';

const useGetToken = () => {
  const [token, setToken] = useState({});

  const authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:
      'grant_type=client_credentials&client_id=' +
      CLIENT_ID +
      '&client_secret=' +
      CLIENT_SECRET,
  };

  const getToken = () => {
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(res => res.json())
      .then(res => AsyncStorage.setItem('token', res.access_token))
      .catch(err => console.log(err));
  };

  return {
    token,
    getToken,
  };
};

export default useGetToken;
