import {useDispatch, useSelector} from 'react-redux';
import {addPlaylist} from '../../store/actions';
import {playlistSelector} from '../../store/selectors';

const useAddPlaylist = () => {
  const dispatchRedux = useDispatch();
  const dispatchAddPlaylist = data => {
    dispatchRedux(addPlaylist(data));
  };

  const playlist = useSelector(playlistSelector);

  return {
    playlist,
    dispatchAddPlaylist,
  };
};

export default useAddPlaylist;
