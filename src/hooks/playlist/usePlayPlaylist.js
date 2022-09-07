import {useDispatch, useSelector} from 'react-redux';
import {
  setAudioPlaying,
  setIsShowModalPlayer,
  setPlayPlaylist,
} from '../../store/actions';

const usePlayPlaylist = () => {
  const dispatchRedux = useDispatch();
  const dispatchPlayPlaylist = data => {
    dispatchRedux(setPlayPlaylist(data));
  };

  const dispatchAudioPlaying = data => {
    dispatchRedux(setAudioPlaying(data));
  };

  const dispatchIsShowModalPlayer = data => {
    dispatchRedux(setIsShowModalPlayer(data));
  };

  return {
    dispatchPlayPlaylist,
    dispatchAudioPlaying,
    dispatchIsShowModalPlayer,
  };
};

export default usePlayPlaylist;
