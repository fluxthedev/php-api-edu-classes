import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';

import './index.css';

ReactDOM.render(
  <MantineProvider
    theme={{ colorScheme: 'dark' }}
    withGlobalStyles
    withNormalizeCSS
  >
    <App />
  </MantineProvider>,
  document.getElementById('root')
);
