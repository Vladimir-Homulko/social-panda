import Avatar from '../../Profile/Information/Avatar/Avatar';
import s from './Chat.module.css';

const Chat = () => {
    return(
        <div className={ s.wrapper }>
            <div className={ s.container }>
                <Avatar />
                <p>Hello. How are you today?</p>
                <span className={ s.time_right }>11:00</span>
            </div>
            <div className={ `${ s.container } ${ s.darker }` }>
                <Avatar className={ s.right } />
                <p>Hey! I'm fine. Thanks for asking!</p>
                <span className={ s.time_left }>11:01</span>
            </div>
            <div className={ s.container }>
                <Avatar />
                <p>Sweet! So, what do you wanna do today?</p>
                <span className={ s.time_right }>11:02</span>
            </div>
            <div className={ `${ s.container } ${ s.darker }` }>
                <Avatar className={ s.right } />
                <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                <span class={ s.time_left }>11:05</span>
            </div>
        </div>
    );
}

export default Chat;