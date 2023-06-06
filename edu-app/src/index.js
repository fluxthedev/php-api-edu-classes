import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  AppShell,
  Navbar,
  Header,
  MantineProvider,
  NavLink,
} from '@mantine/core';

import './index.css';

ReactDOM.render(
  <MantineProvider
    theme={{ colorScheme: 'dark' }}
    withGlobalStyles
    withNormalizeCSS
  >
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <NavLink label="First parent link" childrenOffset={28}>
            <NavLink label="First child link" />
            <NavLink label="Second child link" />
            <NavLink label="Nested parent link" childrenOffset={28}>
              <NavLink label="First child link" />
              <NavLink label="Second child link" />
              <NavLink label="Third child link" />
            </NavLink>
          </NavLink>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Auth0Provider>
        <App />
      </Auth0Provider>
    </AppShell>
  </MantineProvider>,
  document.getElementById('root')
);
