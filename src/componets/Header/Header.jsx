import Navigation from "./Navbar/Navigation";
import s from './Header.module.css';

const Header = () => {
    return(
        <header className="header">
        <div className={ s.header__wrapper }>
          <div className= { s.logo }>
            <a href="#">
              <img
                src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png"
                alt="logo"
              />
            </a>
          </div>
          <Navigation />
        </div>
      </header>
    );
}

export default Header;