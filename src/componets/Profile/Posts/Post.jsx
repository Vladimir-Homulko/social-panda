import Avatar from '../Information/Avatar/Avatar';
import s from './Post.module.css';

const Post = () => {
    return(
        <div className={ s.post }>
            <Avatar />
            <p>My post text</p><span>like</span>
        </div>
    );
}

export default Post;