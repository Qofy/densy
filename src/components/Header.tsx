import "../styles/header.scss";
import { headerNav } from "../data/header.ts";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      
      <nav>
        {headerNav.map((dta) => {
          const IconComponent = dta.icon;
          return (
            <div key={dta.id} className="nav-item">
                <IconComponent size={20} />
              <a href="#" className="nav-link">
                <p>{dta.txt}</p>
              </a>
            </div>
          );
        })}
      </nav>
      
      <button className="login-btn">
        Login
      </button>
    </header>
  );
}
