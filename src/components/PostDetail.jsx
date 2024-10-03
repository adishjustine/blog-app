import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch posts from local storage or your data source
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const selectedPost = storedPosts[id]; // Get the post by ID
    setPost(selectedPost);
  }, [id]);

  if (!post) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">Author: {post.author}</p>
      <p className="text-gray-500 mb-4">Published on: {post.date}</p>
      <p>{post.content}</p> {/* Display full content */}
      <Link to="/">
        <button className="bg-gray-800 text-white p-2 rounded mt-4">Back to Home</button>
      </Link>
    </div>
  );
};

export default PostDetail;
