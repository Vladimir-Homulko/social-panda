import Chat from './Chat/Chat';
import s from './Dialogs.module.css';
import Persons from './Persons/Persons';

const Dialogs = (props) => {
    return(
        <div className={ s.container }>
            <Persons persons={ props.persons } />
            <Chat />
        </div>
    );
}

export default Dialogs;