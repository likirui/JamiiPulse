import './mypost.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState, useEffect } from 'react';

function MyPost({ post }) {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on the post's userId from the API
    const userId = 1;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

    // Fetch comments for the given post ID
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then(response => response.json())
      .then(data => {
        setComments(data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [post.id, post.userId]);

  const likeHandler = () => {
    // Simulate like/unlike by updating local state
    setLike(prevLike => (isLiked ? prevLike - 1 : prevLike + 1));
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {userData && (
              <>
                <img className="postProfileImg" src="/assets/person/user.png" alt="" />
                <span className="postUsername">{userData.name}</span>
              </>
            )}
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.title}</span>
          <span className="postText">{post?.body}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">1 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPost;
