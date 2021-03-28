import React from 'react';
import s from './InputMessage.module.css';

const InputMessage = () => {

    let newMessageEl = React.createRef();

    let sendMessage = () => {
        let text = newMessageEl.current.value;
        alert(text);
    }

    return(
        <div className={ s.input }>
            <textarea ref={ newMessageEl } placeholder='Send message...'></textarea>
            <div className={ s.btn }>
                <button onClick={ sendMessage }>Send</button>
            </div>
        </div>
    );
}

export default InputMessage;