import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardWithStats from '../components/CardWithStats';

function Resources() {
  const [resources, setResources] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Fetch the token from backend first
    axios
      .get('http://localhost:8000/api/getAuthToken')
      .then((response) => {
        const fetchedToken = response.data.access_token; // adjust this if the token is located at a different response path
        setToken(fetchedToken);

        // Then fetch the resources using the token as Authorization
        axios
          .get('http://localhost:8000/api/resources', {
            headers: {
              Authorization: `Bearer ${fetchedToken}`,
            },
          })
          .then((res) => setResources(res.data))
          .catch((err) => console.error(err));
      })
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

export default Resources;
