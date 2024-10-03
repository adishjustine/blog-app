import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!title || !content || !author) {
      setError('Please fill in all fields.');
      return;
    }

    // Create new post object
    const newPost = {
      title,
      content,
      author,
      date: new Date().toLocaleString(),
    };

    // Save to local storage
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    existingPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

    // Reset form fields
    setTitle('');
    setContent('');
    setAuthor('');
    setError('');

    // Navigate back to the blog list
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-[#4b61b8]">Create New Post</h1>
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
        <button type="submit" className="bg-blue-900 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
