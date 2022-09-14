const useConvertObject = () => {
  const fn = (item, img) => {
    return {
      id: item.id,
      title: item.name,
      artist: item.artists,
      duration: item.duration_ms,
      url: item.preview_url,
      artwork: {uri: img},
    };
  };

  return fn;
};

export default useConvertObject;
