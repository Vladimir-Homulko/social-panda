const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
      { id: 1, message: "How are you?", likesCount: 12 },
      { id: 2, message: "This is my first post)", likesCount: 10 },
      { id: 3, message: "This is my second post!", likesCount: 22 },
    ],
    newPostText: "AgaraGuju",
  };

const profileReduser = (state = initialState , action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 43,
            };
    
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () =>  ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReduser;