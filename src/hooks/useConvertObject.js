const useConvertObject = () => {
  const fn = item => {
    return {
      id: item.id,
      title: item.name,
      artist: item.artists,
      duration: item.duration_ms,
      url: item.preview_url,
      artwork: require('../../data/artworks/getlucky.png'),
    };
  };

  return fn;
};

export default useConvertObject;
