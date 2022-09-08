import {useSelector} from 'react-redux';
import {tracks} from '../../../data';
import {playPlaylistSelector} from '../../store/selectors';
import useGetAudioList from './useGetAudioList';

const useIsChoose = () => {
  const playPlaylist = useSelector(playPlaylistSelector);
  const audioList = useGetAudioList(playPlaylist.name);
  console.log(audioList);

  const check = item => {
    audioList.map(i => {
      if (item.id == i.id) return true;
      else return false;
    });
  };

  return check;
};

export default useIsChoose;
