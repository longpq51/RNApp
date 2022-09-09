import {useDispatch} from 'react-redux';
import {deletePlaylist} from '../../store/actions';

const useDeletePlaylist = () => {
  const dispatchRedux = useDispatch();
  const dispatchDeletePlaylist = data => {
    dispatchRedux(deletePlaylist(data));
  };

  return dispatchDeletePlaylist;
};

export default useDeletePlaylist;
