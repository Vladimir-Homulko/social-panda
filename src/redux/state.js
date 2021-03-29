let rerenderEntireTree = () => {
    console.log('')
}

let state = {
    profile: {
        posts: [
            {id: 1, message: "How are you?", likesCount: 12},
            {id: 2, message: "This is my first post)", likesCount: 10},
            {id: 3, message: "This is my second post!", likesCount:22}
        ],
        newPostText: 'AgaraGuju'
    },
    dialogs: {
        persons: [
            {id: 1, name: 'Vova'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Maks'},
            {id: 4, name: 'Lexa'},
            {id: 5, name: 'Andrey'},
            {id: 6, name: 'Djodji'}
        ],
        messages: [
            {id: 1, message: 'Hello. How are you today?', time: '11:01', new: true},
            {id: 2, message: 'Hey! I am fine. Thanks for asking!', time: '11:01', new: false},
            {id: 3, message: 'Sweet! So, what do you wanna do today?', time: '11:03', new: true},
            {id: 4, message: 'Nah, I dunno. Play soccer.. or learn more coding perhaps?', time: '11:05', new: false}
        ]
    }
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profile.newPostText,
        likesCount: 43
    }

    state.profile.posts.push(newPost);
    state.profile.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profile.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;