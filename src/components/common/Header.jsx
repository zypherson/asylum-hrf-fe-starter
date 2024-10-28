import Logo from '../../assets/logo.png'
export default function Header() {
    return (
        <div className="flex w-[100%] bg-[#666555] justify-between px-14">
        <div className="flex justify-between">
        <a href="https://www.humanrightsfirst.org/">
          <img className="w-[100px]" src={Logo} alt="HRF logo white" />
        </a>
      </div>
      <div className="flex pt-4">
        <a href="/" className="text-[#E2F0F7] pr-[75px]">
          Home
        </a>
        <a href="/graphs" className="text-[#E2F0F7]">
          Graphs
        </a>
      </div>
    </div>
    );
}