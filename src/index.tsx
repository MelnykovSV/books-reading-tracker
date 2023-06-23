import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './theme';

import { MediaContextProvider } from './components/MediaContextProvider';

import { ThemeProvider } from '@mui/system';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MediaContextProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/books-reading-tracker">
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </MediaContextProvider>
  </React.StrictMode>
);
