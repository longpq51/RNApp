import {useDispatch, useSelector} from 'react-redux';
import {setAudio} from '../store/actions';
import {audioSelector} from '../store/selectors';

const useAudio = () => {
  const audio = useSelector(audioSelector);
  const dispatchRedux = useDispatch();
  const dispatchAudio = data => {
    dispatchRedux(setAudio(data));
  };

  return {
    audio,
    dispatchAudio,
  };
};

export default useAudio;
