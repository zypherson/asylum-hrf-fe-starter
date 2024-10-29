import Logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <div className="flex flex-col w-[100%] bg-[#666555] justify-between px-14 text-amber-50">
      <div className="footer-details flex pt-4 pb-8">
        <div className="flex justify-between">
          <a href="https://www.humanrightsfirst.org/">
            <img className="w-[100px]" src={Logo} alt="HRF logo white" />
          </a>
        </div>
        <div className="footer-address flex flex-1 flex-col pt-4 ">
          <p>Human Rights First</p>
          <p>75 Broad St, 31st Floor</p>
          <p>New York, New York 10004 US</p>
          <p>For Media Inquiries call 202-370-333</p>
        </div>
      </div>
      <div className="footer-links flex gap-10 content-center justify-center pb-4">
        <button>About Us</button>
        <button>Contact Us</button>
        <button>Press</button>
        <button>Terms & Privacy</button>
        <button>Sign Up</button>
        <button>Careers</button>
      </div>
    </div>
  );
}