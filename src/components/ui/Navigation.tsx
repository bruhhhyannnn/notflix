import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { NavigationStyles } from "../../css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`${NavigationStyles.nav} ${menuOpen ? NavigationStyles.open : ""}`}>
      <div className={NavigationStyles.content}>
        <div className={NavigationStyles.navContainer}>
          <Link to="/" className={NavigationStyles.logoContainer}>
            <img src="/notflix-nav.png" alt="Notflix Icon" className={NavigationStyles.logoIcon} />
            <p className={NavigationStyles.logo} onClick={() => setMenuOpen(false)}>
              Notflix
            </p>
          </Link>
          <button onClick={toggleMenu} className={NavigationStyles.hamburgerButton}>
            {menuOpen ? <X size={26} className={NavigationStyles.hamburgerMenu} /> : <List size={26} className={NavigationStyles.hamburgerMenu} />}
          </button>
        </div>
        <div className={`${NavigationStyles.linkContainer} ${menuOpen ? NavigationStyles.open : ""}`}>
          <Link to="/" className={NavigationStyles.link} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/favorites" className={NavigationStyles.link} onClick={() => setMenuOpen(false)}>
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}
