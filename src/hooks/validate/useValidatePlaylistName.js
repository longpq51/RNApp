import {useSelector} from 'react-redux';
import {playlistSelector} from '../../store/selectors';

const useValidatePlaylistName = name => {
  const playlist = useSelector(playlistSelector);

  return playlist.find(i => i.name === name);
};

export default useValidatePlaylistName;
