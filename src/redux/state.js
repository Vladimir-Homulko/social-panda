const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
          new: true,
        },
        {
          id: 2,
          message: "Hey! I am fine. Thanks for asking!",
          time: "11:01",
          new: false,
        },
        {
          id: 3,
          message: "Sweet! So, what do you wanna do today?",
          time: "11:03",
          new: true,
        },
        {
          id: 4,
          message: "Nah, I dunno. Play soccer.. or learn more coding perhaps?",
          time: "11:05",
          new: false,
        },
      ],
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profile.newPostText,
        likesCount: 43,
      };

      this._state.profile.posts.push(newPost);
      this._state.profile.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profile.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

window.store = store;
export default store;
