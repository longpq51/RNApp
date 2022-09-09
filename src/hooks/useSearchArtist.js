import {tracks} from '../../data';

const useSearchArtist = value => {
  return tracks.filter(item =>
    item.artist.toLowerCase().includes(value.toLowerCase()),
  );
};

export default useSearchArtist;
