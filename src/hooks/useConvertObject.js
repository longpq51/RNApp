const useConvertObject = () => {
  const fn = (item, img) => {
    return {
      id: item.id,
      title: item.name,
      artist: item.artists,
      duration: item.duration_ms,
      url: item.preview_url,
      artwork: img !== undefined ? {uri: img} : require('../assets/logo.png'),
    };
  };

  return fn;
};

export default useConvertObject;
