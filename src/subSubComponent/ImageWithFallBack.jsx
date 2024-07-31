import React from 'react';
import errorGuard from '../assets/svg/errorGuard/error.svg';

const ImageWithFallback = ({ src, alt, className }) => {
  
  const [imgSrc, setImgSrc] = React.useState(src);
  React.useEffect(() => {
    if (!src) {
      setImgSrc(errorGuard);
    }
  }, [src]);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(errorGuard)}
    />
  );
};

export default ImageWithFallback;
