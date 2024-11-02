import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { ProvideAppContext } from './context/AppContext.jsx';
// import 'dotenv/config.js';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={'dev-qxlgmxhzixc2w1pm.us.auth0.com'}
    clientId={'X6brpU1FkHIgivRrcnxbM4elrx56Flaz'}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <ProvideAppContext>
      <App />
    </ProvideAppContext>
  </Auth0Provider>
);
