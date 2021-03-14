import Information from './Information/Information';
import Post from './Posts/Post';
import PostInput from './Posts/PostInput';
import s from './Profile.module.css';

const Profile = () => {
    return(
        <main>
        <div className={ s.profile }>
          <Information />
          <PostInput />
          <Post />
          <Post />
          <Post />
        </div>
      </main>
    );
}

export default Profile;