import s from './Like.module.css';

const Like = (props) => {
    return(
        <div className={ s.like }>
            <img src='https://bfbsk.ru/wp-content/uploads/2019/03/like-icon.png' />
            <span>{ props.likesCount }</span>
        </div>
    );
}

export default Like;