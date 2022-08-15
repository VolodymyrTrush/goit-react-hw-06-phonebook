import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'store/store';
import { theme } from 'styleConfig/theme';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import GlobalCSS from './styleConfig/index.css.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <GlobalCSS />
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
