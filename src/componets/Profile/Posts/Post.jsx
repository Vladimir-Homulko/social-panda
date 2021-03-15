import Avatar from '../Information/Avatar/Avatar';
import Like from '../Like/Like';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={ s.post }>
            <Avatar />
            <p>{ props.message }</p>
            <Like count='20'/>
        </div>
    );
}

export default Post;