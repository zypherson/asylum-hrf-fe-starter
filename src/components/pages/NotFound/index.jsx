import { Link, useRouteError } from 'react-router-dom';
import React from 'react';

export const NotFoundPage = () => {
  const error = useRouteError();
  console.warn(error);

  return (
    <div id='error-page'>
      <h1>404 Page Not Found</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>
        <button>Back To Home</button>
      </Link>
    </div>
  );
};