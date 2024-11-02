import { useAuth0 } from '@auth0/auth0-react';

export const LoggingButtons = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const buttonText = isAuthenticated ? 'Log Out' : 'Log In';

  const handleLogging = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <button className='bg-amber-50 text-amber-800 px-4 py-1' onClick={handleLogging}>
      {buttonText}
    </button>
  );
};