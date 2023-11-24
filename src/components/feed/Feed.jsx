import React, { useState, useEffect } from 'react';
import './feed.css';
import Share from '../../components/share/Share';
import Post from '../post/Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');
  const [postLimit, setPostLimit] = useState(20); // Initial post limit is 20

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const postData = await response.json();
        setPosts(postData.slice(0, postLimit)); // Only show the initial number of posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [postLimit]); // Trigger fetchPosts whenever postLimit changes

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePaymentSubmit = () => {
    // Implement your payment submission logic here
    console.log('Receipt Number:', receiptNumber);

    // Update post limit to 100 upon successful submission
    setPostLimit(100);

    // For now, just close the modal
    handleCloseModal();
  };

  return (
    <div className="feed">
      <Share />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <button className="feedbarButton" onClick={handleShowModal}>
        Show More
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
        
            <span>
              <img
                className="paymentMethodImg"
                src="/assets/post/Mpesa-Logo.jpg"
                alt="Payment Method"
              />
            </span>
            <h3>JamiiPulse Monthly Mpesa Payment Subscription</h3> 
            <p>Please follow instruction below:</p>
            <ol>
              <li>On the M-PESA Menu go to "Lipa Na M-PESA" and select buy goods</li>
              <li>Enter the Till Number: 8012294</li>
              <li>Enter amount: Ksh. 1800</li>
              <li>Enter your M-PESA Pin</li>
              <li>Enter received M-PESA transaction code into input field below and submit</li>
            </ol>
             
            <input
              type="text" className='receiptInput'
              placeholder="Enter Transaction Code"
              value={receiptNumber}
              onChange={(e) => setReceiptNumber(e.target.value)}
            />
            <button className='paymentButton' onClick={handlePaymentSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
