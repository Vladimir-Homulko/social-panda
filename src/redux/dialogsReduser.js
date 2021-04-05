const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_SEND_MESSAGE_TEXT = 'UPDATE-SEND-MESSAGE-TEXT';

let initialState = {
    persons: [
      { id: 1, name: "Vova" },
      { id: 2, name: "Valera" },
      { id: 3, name: "Maks" },
      { id: 4, name: "Lexa" },
      { id: 5, name: "Andrey" },
      { id: 6, name: "Djodji" },
    ],
    messages: [
      {
        id: 1,
        message: "Hello. How are you today?",
        time: "11:01",
        owner: false,
      },
      {
        id: 2,
        message: "Hey! I am fine. Thanks for asking!",
        time: "11:01",
        owner: true,
      },
      {
        id: 3,
        message: "Sweet! So, what do you wanna do today?",
        time: "11:03",
        owner: false,
      },
      {
        id: 4,
        message: "Nah, I dunno. Play soccer.. or learn more coding perhaps?",
        time: "11:05",
        owner: true,
      },
    ],
    newMessageText: 'Hi!'
  };

const dialogsReduser = (state = initialState, action) => {

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