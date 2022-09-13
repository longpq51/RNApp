import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {useEffect} from 'react';
import {instance} from '../../../services/serviceSpotify';

const useGetArtistTopTracks = id => {
  const [topTracks, setTopTracks] = useState([]);
  const [token, setToken] = useState('');

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    params: {
      market: 'VN',
    },
  };

  useEffect(() => {
    AsyncStorage.getItem('token').then(res => setToken(res));

    instance
      .request(`artists/${id}/top-tracks`, options)
      .then(res => setTopTracks(res))
      .catch(err => console.log(err.response.data));
  }, [token]);

  return topTracks.data !== undefined ? topTracks.data.tracks : [];
};

export default useGetArtistTopTracks;
