import Image from 'next/image';
import SiteLogo from '../public/site-logo.svg';

function Header() {
  return (
    <>
      <div className="site-header">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-wrappper">
              <Image src={SiteLogo} alt="Sitelogo" />
            </div>
            <div className="header-text">
              <p>SME Healthcheck - Application Form</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
