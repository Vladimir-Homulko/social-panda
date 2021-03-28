import Avatar from '../../../../Profile/Info/Avatar/Avatar';
import Text from './../Text';
import Time from './../Time';
import s from './../../Chat.module.css';

const SendMessage = (props) => {
    return(
        <div className={ s.container_wrapper }>
            <div className={ s.container_dark }>
                <Avatar className={ s.right } />
                <Text message={props.message} />
                <Time time={props.time}/>
            </div>
        </div>
    );
}

export default SendMessage;