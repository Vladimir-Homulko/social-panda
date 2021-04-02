import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import s from './PostInput.module.css';

const PostInput = (props) => {

    let newPostEl = React.createRef();

    let addNewPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostEl.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    
    return(
        <div className={ s.input }>
            <h2>My Posts</h2>
            <textarea onChange={ onPostChange } 
                      ref={ newPostEl } 
                      placeholder='your news...'
                      value={ props.newPostText } />
            <div className={ s.btn }>
                <button onClick={ addNewPost }>Add Post</button>
            </div>
        </div>
    );
}

export default PostInput;