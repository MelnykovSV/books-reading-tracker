import { useContext, createContext } from 'react';

export const MediaContext = createContext(true);

export const useMediaContext = () => useContext(MediaContext);
