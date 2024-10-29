import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);

// import * as React from 'react';
// import * as ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css';
// import LandingPage from './components/pages/LandingPage.jsx';
// import { DataVisPage } from './components/pages/DataVisPage.jsx';
// import { NotFoundPage } from './components/pages/NotFoundPage.jsx';
// import { GraphsContainer } from './components/pages/GraphsContainer.jsx';
//
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );