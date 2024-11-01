import Logo from '../../assets/logo.png';
import { LogoutButton } from '../common/LogoutButton.jsx';
import { LoginButton } from '../common/LoginButton.jsx';

export default function Header() {
  return (
    <header className='flex w-[100%] bg-[#666555] justify-between px-14'>
      <div className='flex justify-between'>
        <a href='https://www.humanrightsfirst.org/'>
          <img className='w-[100px]' src={Logo} alt='HRF logo white' />
        </a>
      </div>
      <div className='flex pt-4'>
        <a href='/' className='text-[#E2F0F7] pr-[75px]'>
          Home
        </a>
        <a href='/graphs' className='text-[#E2F0F7]'>
          Graphs
        </a>
        <LoginButton />
        <LogoutButton />
      </div>
    </header>
  );
}