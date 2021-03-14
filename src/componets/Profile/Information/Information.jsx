import Avatar from './Avatar/Avatar';
import Description from './Description/Description';
import s from './Information.module.css';

const Information = () => {
    return(
        <div className={ s.wrapper }>
            <Avatar />
            <Description />
        </div>
    );
}

export default Information;