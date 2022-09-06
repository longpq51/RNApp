import {useDispatch} from 'react-redux';
import {deleteFromPlaylist} from '../../store/actions';

const useDeleteFromPlaylist = () => {
  const dispatchRedux = useDispatch();
  const dispatchDeleteFromPlaylist = data => {
    dispatchRedux(deleteFromPlaylist(data));
  };

  //   const audioList =
  //     playlist[0][0] === undefined
  //       ? playlist.filter(item => item.name === name)[0].data
  //       : playlist[0].filter(item => item.name === name)[0].data;

  return {
    dispatchDeleteFromPlaylist,
  };
};

export default useDeleteFromPlaylist;
