import s from './PostInput.module.css';

const PostInput = () => {
    return(
        <div className={ s.input }>
            <h2>My Posts</h2>
            <textarea placeholder='your news...'></textarea>
            <button>Send</button>
        </div>
    );
}

export default PostInput;