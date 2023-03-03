import { useEffect, useState } from 'react';
import './App.css';
//msal and graph
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from './graph/config';
import { getToken } from './graph/services';


function App() {
  const [token, setToken] = useState("");
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(async () => {

      // !isAuthenticated && await instance.loginPopup();
      await instance.loginPopup()
      const token = await getToken();
      console.log("This is res: ", token);
    
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
