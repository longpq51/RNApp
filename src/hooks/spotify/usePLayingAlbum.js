import {useDispatch, useSelector} from 'react-redux';
import {setAlbum} from '../../store/actions';
import {albumSelector} from '../../store/selectors';

const usePlayingAlbum = () => {
  const PlayingAlbum = useSelector(albumSelector);

  const dispatchRedux = useDispatch();
  const dispatchPlayingAlbum = data => {
    dispatchRedux(setAlbum(data));
  };

  return {
    PlayingAlbum,
    dispatchPlayingAlbum,
  };
};

export default usePlayingAlbum;
