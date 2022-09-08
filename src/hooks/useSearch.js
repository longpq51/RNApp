import {tracks} from '../../data';

const useSearch = value => {
  return tracks.filter(item =>
    item.title.toLowerCase().includes(value.toLowerCase()),
  );
};

export default useSearch;
