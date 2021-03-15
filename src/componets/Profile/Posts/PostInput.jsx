import s from './PostInput.module.css';

const PostInput = () => {
    return(
        <div className={ s.input }>
            <h2>My Posts</h2>
            <textarea placeholder='your news...'></textarea>
            <div className={ s.btn }>
                <button>Send</button>
            </div>
        </div>
    );
}

export default PostInput;