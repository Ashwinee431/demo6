import { useState } from 'react';
import './Header.css'; 
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="logo">
          <h1>Shikhar</h1>
        </div>
        <ul className="header-menu">
          <li
            className="header-item"
            onMouseEnter={() => toggleDropdown('deliver')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href="#deliver" className={`header-link ${openDropdown === 'deliver' ? 'active' : ''}`}>
              What we deliver {openDropdown === 'deliver' ? <FaChevronUp /> : <FaChevronDown />}
            </a>
            {openDropdown === 'deliver' && (
              <div className="dropdown-menu">
                <ul className="dropdown-list">
                  <li><a href="https://doli.gov.np/doligov/" className="dropdown-link">Infrastructure</a></li>
                  <li><a href="https://www.britannica.com/technology/construction" className="dropdown-link">Buildings</a></li>
                  <li><a href="https://www.government.nl/topics/democracy/the-purpose-of-political-parties" className="dropdown-link">Power & Energy</a></li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="header-item"
            onMouseEnter={() => toggleDropdown('about')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href="#about" className={`header-link ${openDropdown === 'about' ? 'active' : ''}`}>
              Who we are {openDropdown === 'about' ? <FaChevronUp /> : <FaChevronDown />}
            </a>
            {openDropdown === 'about' && (
              <div className="dropdown-menu">
                <ul className="dropdown-list">
                  <li><a href="https://www.awwwards.com/websites/business-corporate/" className="dropdown-link">Company Info</a></li>
                  <li><a href="https://leadership.global/" className="dropdown-link">Leadership</a></li>
                  <li><a href="https://www.monster.com/" className="dropdown-link">Careers</a></li>
                </ul>
              </div>
            )}
          </li>
        </ul>
        <div className="header-right">
          <a href="https://99designs.com/inspiration/websites/media" className="header-link">Media</a>
          <a href="https://www.monster.com/" className="header-link">Careers</a>
          <a href="https://blog.hubspot.com/service/best-contact-us-pages" className="header-link">Contact</a>
          <FaSearch className="search-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
