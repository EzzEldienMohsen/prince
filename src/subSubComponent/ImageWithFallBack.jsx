import React, { useState } from 'react';
import errorGuard from '../assets/svg/errorGuard/error.svg';

const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

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
