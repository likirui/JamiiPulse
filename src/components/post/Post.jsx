import './post.css'
import React, { useState, useEffect } from 'react';

const Post = ({ post }) => {
  const [like, setLike] = useState(post?.like ?? 0);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState(null);

  const [comment, setComment] = useState('');
  const [showCommentPopup, setShowCommentPopup] = useState(false);

  const handleCommentClick = () => {
    setShowCommentPopup(true);
  };

  const handleCloseCommentPopup = () => {
    setShowCommentPopup(false);
    setComment(''); // Clear the comment input when closing the popup
  };

  const handleCommentSubmit = () => {
    // Implement your logic to submit the comment
    console.log('Submitted comment:', comment);

    // Close the comment popup
    handleCloseCommentPopup();
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [post?.userId]);



  const likeHandler = () => {
    setLike((prevLike) => (isLiked ? prevLike - 1 : prevLike + 1));
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      {user && (
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src="/assets/person/user.png" alt="" />
              <span className="postUsername">{user.name}</span>
              <span className="postDate">{post?.date}</span>
            </div>
            <div className="postTopRight">
              {/* Add your MoreVertIcon component here */}
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.title}</span>
            <span className="postText">{post?.body}</span>
            <img className="postImg" src={post?.image} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
              <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
            <span className="postCommentText" onClick={handleCommentClick}>
            1 comment
          </span>

          {/* Comment Popup */}
          {showCommentPopup && (
            <div className="commentPopup">
              <textarea
                placeholder="Add your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button onClick={handleCommentSubmit}>Submit</button>
              <button onClick={handleCloseCommentPopup}>Cancel</button>
            </div>
          )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;