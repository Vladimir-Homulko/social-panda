import Avatar from '../Info/Avatar/Avatar';
import Like from '../Likes/Like';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={ s.post }>
            <Avatar />
            <p>{ props.message }</p>
            <Like likesCount={props.likesCount}/>
        </div>
    );
}

export default Post;