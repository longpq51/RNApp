import {useDispatch, useSelector} from 'react-redux';
import {addToPlaylist} from '../../store/actions';
import {audioPlayingSelector, playlistSelector} from '../../store/selectors';

const useAddToPlaylist = name => {
  const dispatchRedux = useDispatch();
  const dispatchAddToPlaylist = data => {
    dispatchRedux(addToPlaylist(data));
  };

  const playlist = useSelector(playlistSelector);
  const audioList =
    playlist[0][0] === undefined
      ? playlist.filter(item => item.name === name)[0].data
      : playlist[0].filter(item => item.name === name)[0].data;

  return {
    audioList,
    dispatchAddToPlaylist,
  };
};

export default useAddToPlaylist;
