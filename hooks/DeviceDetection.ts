import { useState, useEffect } from 'react';

export const useDeviceDetection = () => {
  const [IsTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleDeviceDetection = () => {
      if (window.innerWidth <= 768) {
        setIsTouch(true)
      } else {
        setIsTouch(false)
      }
    };

    handleDeviceDetection();
    window.addEventListener('resize', handleDeviceDetection);

    return () => {
      window.removeEventListener('resize', handleDeviceDetection);
    };
  }, []);

  return IsTouch;
};
