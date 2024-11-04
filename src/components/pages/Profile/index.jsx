import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className='max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-lg p-6 text-center'>
        <img src={user.picture} alt={user.name} className='w-24 h-24 rounded-full mx-auto mb-4' />
        <h2 className='text-2xl font-semibold mb-2'>{user.name}</h2>
        <p className='text-gray-600'>{user.email}</p>
        <button
          className='mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
      </div>
    )
  );
};
