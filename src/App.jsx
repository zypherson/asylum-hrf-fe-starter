import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LandingPage from './components/pages/LandingPage';
import { DataVisPage } from './components/pages/DataVisPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GraphsContainer } from './components/pages/GraphsContainer.jsx';
import { NotFoundPage } from './components/pages/NotFoundPage.jsx';
import * as React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/graphs',
    element: <GraphsContainer />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/data-vis',
    element: <DataVisPage />,
    errorElement: <NotFoundPage />,
  },
]);

function App() {
  return (
    <div className="font-serif w-[100vw] h-[100vh] m-0 flex flex-col justify-between align-centre text-center min-h-screen">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;