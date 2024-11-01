import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../common/LoggingButtons.jsx';

export default function Header() {
  return (
    <header className='flex w-[100%] bg-[#666555] justify-between px-14'>
      <div className='flex justify-between'>
        <a href='https://www.humanrightsfirst.org/'>
          <img className='w-[100px]' src={Logo} alt='HRF logo white' />
        </a>
      </div>
      <div className='flex items-center pt-4 gap-16'>
        <a href='/' className='flex text-[#E2F0F7]'>
          Home
        </a>
        <a href='/graphs' className='text-[#E2F0F7]'>
          Graphs
        </a>
        <LoggingButtons />
      </div>
    </header>
  );
}