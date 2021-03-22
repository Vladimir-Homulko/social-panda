import Avatar from './../../../../Profile/Information/Avatar/Avatar';
import Text from './../Text';
import Time from './../Time';
import s from './../../Chat.module.css';

const NewMessage = (props) => {
    return(
        <div className={ s.container }>
                <Avatar />
                <Text message={props.message}/>
                <Time time={props.time}/>
            </div>
    );
}

export default NewMessage;