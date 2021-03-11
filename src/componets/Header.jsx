const Header = () => {
    return(
        <header className="header">
        <div className="header__wrapper">
          <div className="logo">
            <a href="#" className="logo__link">
              <img
                src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png"
                alt="logo"
              />
            </a>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Messages</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}

export default Header;