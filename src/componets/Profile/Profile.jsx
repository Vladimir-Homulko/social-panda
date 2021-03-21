import Information from './Information/Information';
import Post from './Posts/Post';
import PostInput from './Posts/PostInput';
import s from './Profile.module.css';

const Profile = (props) => {
    let postEl = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount} />);

    return(
        <main>
        <div className={ s.profile }>
          <Information />
          <PostInput />
          { postEl }
        </div>
      </main>
    );
}

export default Profile;