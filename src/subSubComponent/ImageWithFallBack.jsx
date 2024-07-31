import React from 'react';
import errorGuard from '../assets/svg/errorGuard/error.svg';

const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [theClass, setTheClass] = React.useState(className);
  React.useEffect(() => {
    if (!src) {
      setImgSrc(errorGuard);
      setTheClass('bg-[#DADADA]  flex justify-center items-center');
    }
  }, [src]);
  if (src) {
    return (
      <img
        src={imgSrc}
        alt={alt}
        className={theClass}
        onError={() => setImgSrc(errorGuard)}
      />
    );
  } else {
    return (
      <div className="flex w-[80vw]  justify-center items-center bg-[#DADADA] h-[214px]">
        <img
          src={imgSrc}
          alt={alt}
          className={theClass}
          onError={() => setImgSrc(errorGuard)}
        />
      </div>
    );
  }
}

export default ImageWithFallback;
