// Libraries

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import { AppShell, Navbar, Header } from '@mantine/core';
import { Auth0Provider } from '@auth0/auth0-react';

// Components
import Users from './views/Users';
import Resources from './views/Resources';

// Styles
import './App.css';

function App() {
  return (
    <Router>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={500} p="xs">
            <Link to="/">Resources</Link>
            <Link to="/users">Users</Link>
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
          <Routes>
            <Route path="/" element={<Resources />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Auth0Provider>
      </AppShell>
    </Router>
  );
}

export default App;
