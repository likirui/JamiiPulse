import React, { useState, useEffect } from 'react';
import MyPost from '../mypost/MyPost';
import Share from '../../components/share/Share';

function MyFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLoggedInUserId = () => {
      // Replace this with your actual method to get the logged-in user ID
      return 1; // Example user ID, replace it with your logic
    };

    const userId = getLoggedInUserId();

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []); 

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {loading ? (
          <p>Loading...</p>
        ) : (
          posts.map((p) => (
            <MyPost key={p.id} post={p} />
          ))
        )}
      </div>
    </div>
  );
}

export default MyFeed;