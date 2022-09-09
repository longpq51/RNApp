import {useSelector} from 'react-redux';
import {playPlaylistSelector} from '../../store/selectors';
import useGetAudioList from './useGetAudioList';

const useIsChoose = audioList => {
  const check = item => {
    return audioList.find(i => item.id === i.id);
  };

  return check;
};

export default useIsChoose;
