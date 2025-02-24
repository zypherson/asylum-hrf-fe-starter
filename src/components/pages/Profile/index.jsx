import { useAuth0 } from "@auth0/auth0-react";
/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {


  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div className='text-center p-4'>Loading...</div>;

  if (!isAuthenticated) return <div className='text-center p-4'>You are not logged in.</div>;

  return (
    <div className='p-6 text-center'>
      <h2 className='text-2xl font-bold'>Profile</h2>
      
      <p className='text-lg mt-2'>{user.name}</p>
      <p className='text-sm text-gray-500'>{user.email}</p>
    </div>
  );
};

export default Profile;
