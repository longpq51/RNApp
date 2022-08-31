import {useEffect, useState} from 'react';

const useGetPlaylist = (list, playlists) => {
  const [playlist, setPlaylist] = useState([]);

  const getPlaylist = listId => {
    setPlaylist(listId.map(i => list.filter(item => item.id === i)));
  };

  useEffect(() => {
    getPlaylist(playlists[0].items);
  }, []);

  return {
    playlist,
    getPlaylist,
  };
};

export default useGetPlaylist;
