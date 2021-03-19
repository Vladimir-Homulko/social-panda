import Chat from './Chat/Chat';
import s from './Dialogs.module.css';
import Persons from './Persons/Persons';

const Dialogs = () => {
    return(
        <div className={ s.container }>
            <Persons />
            <Chat />
        </div>
    );
}

export default Dialogs;