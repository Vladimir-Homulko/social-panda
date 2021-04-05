import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";

let store = {
  _state: {
    profile: {
      posts: [
        { id: 1, message: "How are you?", likesCount: 12 },
        { id: 2, message: "This is my first post)", likesCount: 10 },
        { id: 3, message: "This is my second post!", likesCount: 22 },
      ],
      newPostText: "AgaraGuju",
    },
    dialogs: {
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
    },
  },

  _callSubscriber() {
    console.log("");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profile = profileReduser(this._state.profile, action);
    this._state.dialogs = dialogsReduser(this._state.dialogs, action);

    this._callSubscriber(this._state);
  }
};



window.store = store;
export default store;