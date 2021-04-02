import s from './Chat.module.css';
import SendMessage from './Message/SendMessage/SendMessage';
import NewMessage from './Message/NewMessage/NewMessage';
import InputMessage from './Message/InputMessage/InputMessage';

//TODO: scroll chat

const Chat = (props) => { 
    let elMessage = props.messages.map(message => message.owner == false ?
        <NewMessage message={message.message} time={message.time}/> :
        <SendMessage message={message.message} time={message.time}/>
    );

    return(
        <div className={ s.wrapper }>
            { elMessage }
            <InputMessage dispatch={ props.dispatch }
                          newMessageText={ props.newMessageText }
            />
        </div>
    );
}

export default Chat;