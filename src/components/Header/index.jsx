import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <span>Objetivo de Desenvolvimento Sustentável 7</span>
        <nav>
          <Link to="/">Página Inicial</Link>
          <Link to="/ods">ODS 7</Link>
          <Link to="/sobre">Sobre Mim</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
