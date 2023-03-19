import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

type NavbarProps = {
  links: string[];
};

const Navbar = (props: NavbarProps) => {
  const title: string = "TheChair";
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <header className="header">
        <a href="/" className="logo-link">
          <p className="logo">
            {title}
            <span className="header-class">Shop.</span>
          </p>
        </a>
        {/* Nav */}
        <nav className={open ? "main-nav" : "nav-open"}>
          <ul className="main-nav-list">
            {props.links.map((link) => (
              <li key={link} className="main-nav-link">
                <a href="/" className="main-nav-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button className="nav-button" onClick={handleClick}>
            {open ? <AiOutlineClose /> : <FaBars />}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
