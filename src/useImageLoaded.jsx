import { useState, useEffect } from 'react';

const useImagesLoaded = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);
    const totalImages = images.length;
    let loadedImages = 0;

    const checkImageLoaded = () => {
      loadedImages += 1;
      if (loadedImages === totalImages) {
        setLoaded(true);
      }
    };

    if (totalImages === 0) {
      setLoaded(true); // No images to load
    } else {
      images.forEach((img) => {
        if (img.complete) {
          checkImageLoaded();
        } else {
          img.addEventListener('load', checkImageLoaded);
          img.addEventListener('error', checkImageLoaded);
        }
      });
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', checkImageLoaded);
        img.removeEventListener('error', checkImageLoaded);
      });
    };
  }, []);

  return loaded;
};

export default useImagesLoaded;
