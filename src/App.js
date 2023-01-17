import { useEffect, useState } from 'react';
import './App.css';
//msal and graph
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from './graph/config';


function App() {
  const [token, setToken] = useState("");
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(async () => {
    let accessToken = token;

    if (!token) {
      !isAuthenticated && await instance.loginPopup(loginRequest);
      setToken(accessToken);
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Transport Project</h1>
      </header>
    </div>
  );
}

export default App;
