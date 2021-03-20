import { NavLink } from 'react-router-dom';
import Avatar from '../../Profile/Information/Avatar/Avatar';
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

    let personsData = [
        {id: 1, name: 'Vova'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Maks'},
        {id: 4, name: 'Lexa'},
        {id: 5, name: 'Andrey'},
        {id: 6, name: 'Djodji'}
    ];

    return(
        <div className={ s.container }>
            <h1 className={ s.title }>Dialogs</h1>
            <div className={ s.links }>
                <Person name={personsData[0].name} id={personsData[0].id} />
                <Person name={personsData[1].name} id={personsData[1].id} />
                <Person name={personsData[2].name} id={personsData[2].id} />
                <Person name={personsData[3].name} id={personsData[3].id} />
                <Person name={personsData[4].name} id={personsData[4].id} />
                <Person name={personsData[5].name} id={personsData[5].id} />
            </div>
        </div>
    ); 
}

export default Persons;