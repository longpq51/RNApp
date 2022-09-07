import {useSelector} from 'react-redux';
import {playlistSelector} from '../../store/selectors';

const useGetAudioList = name => {
  const playlist = useSelector(playlistSelector);

  const audioList =
    playlist.length > 0 && name !== ''
      ? playlist[0][0] === undefined
        ? playlist.filter(item => item.name === name)[0].data
        : playlist[0].filter(item => item.name === name)[0].data
      : playlist;

  return audioList;
};

export default useGetAudioList;
