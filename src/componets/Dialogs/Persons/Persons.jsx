import { NavLink } from 'react-router-dom';
import Avatar from '../../Profile/Information/Avatar/Avatar';
import s from './Persons.module.css';

const Persons = () => {
    return(
        <div className={ s.container }>
            <h1 className={ s.title }>Dialogs</h1>
            <div className={ s.links }>
                <div className={ s.link }>
                    <Avatar />
                    <NavLink to='1'>Vova</NavLink>
                </div>
                <div className={ s.link }>
                    <Avatar />
                    <NavLink to='2'>Valera</NavLink>
                </div>
                <div className={ s.link }>
                    <Avatar />
                    <NavLink to='3'>Maks</NavLink>
                </div>
                <div className={ s.link }>
                    <Avatar />
                    <NavLink to='4'>Lexa</NavLink>
                </div>
                <div className={ s.link }>
                    <Avatar />
                    <NavLink to='5'>Andrey</NavLink>
                </div>
                <div className={ s.link }>
                    <Avatar />
                    <NavLink to='6'>Djodji</NavLink>
                </div>
            </div>
        </div>
    ); 
}

export default Persons;