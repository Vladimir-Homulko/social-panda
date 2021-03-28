import s from './Chat.module.css';
import SendMessage from './Message/SendMessage/SendMessage';
import NewMessage from './Message/NewMessage/NewMessage';
import InputMessage from './Message/InputMessage/InputMessage';

const Chat = (props) => { 
    let elMessage = props.messages.map(message => message.new == true ?
        <NewMessage message={message.message} time={message.time}/> :
        <SendMessage message={message.message} time={message.time}/>
    );

    return(
        <div className={ s.wrapper }>
            { elMessage }
            <InputMessage />
        </div>
    );
}

export default Chat;