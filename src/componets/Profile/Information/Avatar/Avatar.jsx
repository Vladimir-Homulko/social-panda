import s from './Avatar.module.css'

const Avatar = () => {
    return(
        <img className={ s.avatar }
            src="https://stickershop.line-scdn.net/stickershop/v1/product/11820053/LINEStorePC/main.png;compress=true"
            alt="photo"
        />
    );
}

export default Avatar;