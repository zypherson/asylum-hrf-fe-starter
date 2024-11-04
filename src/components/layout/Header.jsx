import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../../auth/LoggingButtons.jsx';

export default function Header() {
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
        <a href='/profile' className='nav-btn'>
          Profile
        </a>
        <LoggingButtons />
      </div>
    </header>
  );
}
