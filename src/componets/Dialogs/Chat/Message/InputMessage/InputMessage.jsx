import React from 'react';
import { sendMessageActionCreator, updateSendMessageTextActionCreator } from '../../../../../redux/dialogsReduser';
import s from './InputMessage.module.css';

const InputMessage = (props) => {

    let newMessageEl = React.createRef();

    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.dispatch(action);
    }

    let messageOnChange = () => {
        let text = newMessageEl.current.value;
        let action = updateSendMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return(
        <div className={ s.input }>
            <textarea onChange={ messageOnChange }
                      ref={ newMessageEl }
                      placeholder='Send message...' 
                      value={ props.newMessageText }
            />
            <div className={ s.btn }>
                <button onClick={ sendMessage }>Send</button>
            </div>
        </div>
    );
}

export default InputMessage;