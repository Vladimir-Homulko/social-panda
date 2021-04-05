const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_SEND_MESSAGE_TEXT = 'UPDATE-SEND-MESSAGE-TEXT';

const dialogsReduser = (state, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            const getCurrTime = () => {
                let date = new Date();
                
                let temp = 0;
                date.getMinutes() > 9 ?
                temp = date.getHours() + ':' + date.getMinutes() :
                temp = date.getHours() + ':0' + date.getMinutes()
    
                return temp;
            }
    
            
            let currTime =  getCurrTime(); 
    
            let message = {
                id: 5,
                message: state.newMessageText,
                time: currTime,
                owner: true
            }
    
            state.messages.push(message);
            state.newMessageText = "";
            return state;
        case UPDATE_SEND_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateSendMessageTextActionCreator = (text) => ({ type: UPDATE_SEND_MESSAGE_TEXT, newText: text });

export default dialogsReduser;