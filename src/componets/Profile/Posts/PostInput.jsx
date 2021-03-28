import React from 'react';
import s from './PostInput.module.css';

const PostInput = (props) => {

    let newPostEl = React.createRef();

    let addNewPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewPostText(text);
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