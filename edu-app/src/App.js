import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoginButton from './login-button';
import './App.css';
import CardWithStats from './components/CardWithStats';
import { Container } from '@mantine/core';

function App() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/resources', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => setResources(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <header>
        <h1>Resources</h1>
      </header>
      <main className="cards">
        {resources.map((resource) => (
          <CardWithStats
            className="card"
            key={resource.id}
            image={resource.image}
            title={resource.title}
            description={resource.short_description}
          />
        ))}
      </main>
    </>
  );
}

export default App;
