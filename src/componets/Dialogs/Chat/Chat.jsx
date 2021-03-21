import Avatar from '../../Profile/Information/Avatar/Avatar';
import s from './Chat.module.css';

// TODO: create data elements
// TODO: create chat architecture 

const Text = (props) => {
    let message = props.message;

    return(
        <p>{ message }</p>
    );
}

const Time = (props) => {
    let time = props.time;

    return(
        <span>{ time }</span>
    );
}

const Chat = () => {
    return(
        <div className={ s.wrapper }>
            <div className={ s.container }>
                <Avatar />
                <Text message='Hello. How are you today?' />
                <Time time='11:00'/>
            </div>
            <div className={ s.container_dark }>
                <Avatar className={ s.right } />
                <Text message='Hey! I am fine. Thanks for asking!' />
                <Time time='11:01'/>
            </div>
            <div className={ s.container }>
                <Avatar />
                <Text message='Sweet! So, what do you wanna do today?' />
                <Time time='11:03'/>
            </div>
            <div className={ s.container_dark }>
                <Avatar />
                <Text message='Nah, I dunno. Play soccer.. or learn more coding perhaps?' />
                <Time time='11:05'/>
            </div>
        </div>
    );
}

export default Chat;