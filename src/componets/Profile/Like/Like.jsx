import s from './Like.module.css';

const Like = (props) => {
    return(
        <div className={ s.like }>like { props.likesCount }</div>
    );
}

export default Like;