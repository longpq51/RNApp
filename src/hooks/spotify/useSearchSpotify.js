import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {instance} from '../../services/serviceSpotify';

const useSearchSpotify = () => {
  const [searchData, setSearchData] = useState([]);
  const [token, setToken] = useState('');

  const fn = async searchText => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      params: {
        q: searchText,
        type: 'track,artist,album',
      },
    };

    await AsyncStorage.getItem('token').then(res => setToken(res));

    await instance
      .request(`search`, options)
      .then(res => setSearchData(res))
      .catch(err => console.log(err.response.data));
  };

  return {
    searchData,
    fn,
  };
};

export default useSearchSpotify;
