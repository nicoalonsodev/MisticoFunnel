import { useState, useEffect } from 'react';

const useLoadImages = (imageUrls) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => {
        if (isMounted) {
          setLoaded(true);
        }
      })
      .catch((error) => {
        console.error('Error loading images', error);
      });

    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return loaded;
};

export default useLoadImages;
