import { NavLink } from 'react-router-dom';
import Avatar from '../../Profile/Info/Avatar/Avatar';
import s from './Persons.module.css';


const Person = (props) => {

    let path = `/dialogs/${props.id}`;
    let name = props.name;

    return (
        <div className={ s.link }>
            <Avatar />
            <NavLink to={ path }>{ name }</NavLink>
        </div>
    );
}


const Persons = (props) => {
    let personsEl = props.persons.map( person => <Person name={person.name} id={person.id} />);

    return(
        <div className={ s.container }>
            <h1 className={ s.title }>Dialogs</h1>
            <div className={ s.links }>
                { personsEl }
            </div>
        </div>
    ); 
}

export default Persons;