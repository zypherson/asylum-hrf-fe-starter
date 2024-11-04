import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../../auth/LoggingButtons.jsx';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <header className='flex w-[100%] primary-c justify-between px-14'>
      <div className='flex justify-between'>
        <a href='https://www.humanrightsfirst.org/'>
          <img className='w-[100px]' src={Logo} alt='HRF logo white' />
        </a>
      </div>
      <div className='flex items-center py-4 gap-16'>
        <a href='/' className='nav-btn'>
          Home
        </a>
        <a href='/graphs' className='nav-btn'>
          Graphs
        </a>
        {isAuthenticated && (
          <a href='/profile' className='nav-btn'>
            Profile
          </a>
        )}
        <LoggingButtons />
      </div>
    </header>
  );
}
