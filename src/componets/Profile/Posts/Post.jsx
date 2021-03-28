import Avatar from '../Info/Avatar/Avatar';
import Like from '../Likes/Like';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={ s.post }>
            <div className={ s.avatar }>
                <Avatar />
            </div>
            <p>{ props.message }</p>
            <Like likesCount={props.likesCount}/>
        </div>
    );
}

export default Post;