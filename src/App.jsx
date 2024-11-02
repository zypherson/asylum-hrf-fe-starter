import './App.css';
import Footer from './components/layout/Footer.jsx';
import Header from './components/layout/Header.jsx';
import { LandingPage } from './components/pages/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GraphsPage } from './components/pages/DataVisualizations/GraphsPage.jsx';
import { NotFoundPage } from './components/pages/NotFound/index.jsx';
import * as React from 'react';
import { ProvideAppContext } from './context/AppContext.jsx';

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
]);

export const App = () => {
  return (
    <ProvideAppContext>
      <div className='font-serif w-[100vw] h-[100vh] m-0 flex flex-col justify-between align-centre text-center min-h-screen bg-[#f9f9f9]'>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </ProvideAppContext>
  );
};
