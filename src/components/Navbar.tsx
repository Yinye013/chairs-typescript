import React from "react";
type NavbarProps = {
  links: string[];
};

const Navbar = (props: NavbarProps) => {
  const title: string = "TheChair";

  return (
    <div>
      <header className="header">
        <a href="#" className="logo-link">
          <p className="logo">
            {title}
            <span className="header-class">Shop.</span>
          </p>
        </a>
        {/* Nav */}
        <nav className="main-nav">
          <ul className="main-nav-list">
            {props.links.map((link) => (
              <li key={link} className="main-nav-link">
                <a href="/" className="main-nav-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
