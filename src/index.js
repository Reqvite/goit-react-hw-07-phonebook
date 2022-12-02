import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme';
import { App } from 'components/App';
import './index.css';

import {store} from './redux/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>      
    <Provider store={store}>

          <ThemeProvider theme={theme}>
      <App />
        </ThemeProvider>

      </Provider>
  </React.StrictMode>
);
