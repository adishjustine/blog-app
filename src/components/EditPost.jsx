import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams(); // Get the post ID from the URL parameters
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Load the post data from local storage on component mount
  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const post = posts[id];

    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setAuthor(post.author);
    } else {
      navigate('/'); // Redirect if the post does not exist
    }
  }, [id, navigate]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !content || !author) {
      setError('Please fill in all fields.');
      return;
    }

    // Update post object
    const updatedPost = {
      title,
      content,
      author,
      date: new Date().toLocaleString(),
    };

    // Save to local storage
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts[id] = updatedPost; // Update the specific post
    localStorage.setItem('blogPosts', JSON.stringify(posts));

    // Reset error and navigate back to the blog list
    setError('');
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
            rows="6"
            required
          />
        </div>
        <button type="submit" className="bg-red-500 text-white p-2 rounded">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
