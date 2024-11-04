import './App.css';
import Footer from './components/layout/Footer.jsx';
import Header from './components/layout/Header.jsx';
import { LandingPage } from './components/pages/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GraphsPage } from './components/pages/DataVisualizations/GraphsPage.jsx';
import { NotFoundPage } from './components/pages/NotFound/index.jsx';
import * as React from 'react';
import { Profile } from './components/pages/Profile/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/graphs',
    element: <GraphsPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profile',
    element: <Profile />,
    errorElement: <NotFoundPage />,
  },
]);

export const App = () => {
  return (
    <div className='font-serif w-[100vw] h-[100vh] m-0 flex-c justify-between align-centre text-center min-h-screen secondary-c'>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};
