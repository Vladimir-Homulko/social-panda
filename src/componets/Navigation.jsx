import s from './Navigation.module.css';

const Navigation = () => {
    return(
        <nav className={ s.nav }>
            <a href="#">PROFILE</a>
            <a href="#">MESSAGES</a>
            <a href="#">NEWS</a>
            <a href="#">MUSIC</a>
            <a href="#">SETTINGS</a>
            <div className= { `${s.animation} ${s.start__profile}` }></div>
        </nav>
    );
}

export default Navigation;