import {useDispatch, useSelector} from 'react-redux';
import {addPlaylist} from '../../store/actions';
import {playlistSelector} from '../../store/selectors';

const useAddPlaylist = () => {
  const dispatchRedux = useDispatch();
  const dispatchAddPlaylist = data => {
    dispatchRedux(addPlaylist(data));
  };

  const data = useSelector(playlistSelector);
  const playlist =
    data.length !== 0 && data[0][0] === undefined ? data : data[0];

  return {
    playlist,
    dispatchAddPlaylist,
  };
};

export default useAddPlaylist;
