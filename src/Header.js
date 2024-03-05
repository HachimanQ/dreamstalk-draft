import React, { useState } from 'react';

 
function Header() {
  return (
    <header data-bs-theme="dark">
      <Navbar />
      <ThemeToggle />
    </header>
  );
}

 
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand ms-2" href="index.html">Dreamstalk</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 custom-nav">
           
            <NavItem href="aboutUsPage.html">Hakkımızda</NavItem>
            <NavItem href="eventsPage.html">Etkinlikler</NavItem>
            <NavItem href="comiteePage.html">Komiteler</NavItem>
            <NavItem href="FrequentlyAsked2.html">S.S.S</NavItem>
            <NavItem href="contacts.html">İletişim</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

 
function NavItem({ href, children }) {
  return (
    <li className="nav-item">
      <a className="nav-link active" href={href}>{children}</a>
    </li>
  );
}

 
function ThemeToggle() {
  const [theme, setTheme] = useState('dark');  

  
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme); // Set theme attribute on root element
  };

  return (
    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
        
        {theme === 'dark' ? (
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
            <use href="#circle-half"></use>
          </svg>
        ) : (
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
            <use href="#sun-fill"></use>
          </svg>
        )}
        <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      
      <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        
        <ThemeOption value="light" label="Light" icon="sun-fill" theme={theme} onClick={toggleTheme} />
        <ThemeOption value="dark" label="Dark" icon="moon-stars-fill" theme={theme} onClick={toggleTheme} />
        <ThemeOption value="auto" label="Auto" icon="circle-half" theme={theme} onClick={toggleTheme} />
      </ul>
    </div>
  );
}

 
function ThemeOption({ value, label, icon, theme, onClick }) {
  return (
    <li>
      <button type="button" className={`dropdown-item d-flex align-items-center ${theme === value ? 'active' : ''}`} data-bs-theme-value={value} aria-pressed={theme === value} onClick={() => onClick(value)}>
        <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
          <use href={`#${icon}`}></use>
        </svg>
        {label}
      </button>
    </li>
  );
}

export default Header;