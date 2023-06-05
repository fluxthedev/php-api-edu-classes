import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import axios from 'axios';
import LoginButton from './login-button';

function App() {
  const [resources, setResources] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    const token =
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InI3QUd0UXBncUdOU2JtRzZsNFJnWiJ9.eyJpc3MiOiJodHRwczovL2Rldi00MnB5NzM3cTFzZXEyMzJsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiIxdHF0MlRJZmllMzJ5ZmY5Y0l5QkJmOFNUcTQzaUFPaUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9lZHUtY2xhc3Nlcy5jb20iLCJpYXQiOjE2ODU5NzU3NTUsImV4cCI6MTY4NjA2MjE1NSwiYXpwIjoiMXRxdDJUSWZpZTMyeWZmOWNJeUJCZjhTVHE0M2lBT2kiLCJzY29wZSI6ImNyZWF0ZTp1c2VyIGNyZWF0ZTpyZXNvdXJjZSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.UWzOOdFfvrZdxK4PFKdrqz1ZKn4_IwiN5h3U8ln9wwcf2QtnXkIGoLl5666j2ukX6da_CD_OZxo1kyMyi7KUmOlhrTC3MB5YZiZ49TX3ttELtCqNopYQdqqzz3gsSI_2e6sMHr3mqAck5bQAl4PNSM2V38fYmXzu6x_zM35q1K4f0MvZHlGdj2SnfWKLN4fIdpDXwsc5265wOn3DsZyHlS7J-ZHlexcNcuaoIdT7Bl_boSAV1LYSY4Ybd_RtsmtQTmj7zjGEZm1SbidtaliOMmULg-oLrylGJAw_ccbyvklRDBc9XtWBBDdOcuKDixf1dhxZN9oOLX_Y_-VCH5syrw';
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
    <div>
      <header>
        <h1>Resources</h1>
        <LoginButton />
      </header>
      <main>
        {resources.map((resource) => (
          <Card key={resource.id}>
            <CardHeader title={resource.title} />
            <CardContent
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ flexGrow: 1 }}
              >
                {resource.short_description}
              </Typography>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Cost: {resource.cost}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Grade Span: {resource.grade_span}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Tags: {resource.tags}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}

export default App;
