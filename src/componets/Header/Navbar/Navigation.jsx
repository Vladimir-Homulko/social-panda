import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
    return(
        <nav className={ s.nav }>
            <NavLink to="/profile">PROFILE</NavLink>
            <NavLink to="/dialogs">MESSAGES</NavLink>
            <NavLink to="/news">NEWS</NavLink>
            <NavLink to="/music">MUSIC</NavLink>
            <NavLink to="/settings">SETTINGS</NavLink>
            <div className= { `${s.animation} ${s.start__profile}` }></div>
        </nav>
    );
}

export default Navigation;