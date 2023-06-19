import { MediaContext } from '../mediaContext';
import { useState } from 'react';
import { IRouteProps } from '../interfaces';

export const MediaContextProvider = ({ children }: IRouteProps) => {
  const query = matchMedia('(max-width: 767px)');

  const [device, setDevice] = useState(() => {
    if (query.matches) {
      return true;
    } else {
      return false;
    }
  });

  query.addEventListener('change', event => {
    if (event.matches) {
      setDevice(true);
    } else {
      setDevice(false);
    }
  });
  return (
    <MediaContext.Provider value={device}>{children}</MediaContext.Provider>
  );
};
