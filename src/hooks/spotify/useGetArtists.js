import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';
import {instance} from '../../services/serviceSpotify';

const useGetArtists = () => {
  const [artists, setArtists] = useState([]);
  const [token, setToken] = useState('');

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    params: {
      ids: '1LEtM3AleYg1xabW6CRkpi,57g2v7gJZepcwsuwssIfZs,0V2DfUrZvBuUReS1LFo5ZI,5dfZ5uSmzR7VQK0udbAVpf,3KJopZ2uUclqEtLxQg0FNn',
    },
  };

  useEffect(() => {
    const fn = async () => {
      await AsyncStorage.getItem('token').then(res => setToken(res));
      await instance
        .request(`artists`, options)
        .then(res => setArtists(res.data.artists))
        .catch(err => console.log(err.response.data));
    };
    fn();
  }, [token]);

  return artists;
};

export default useGetArtists;
