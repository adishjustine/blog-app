import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Example using FontAwesome icons

const BlogList = () => {
  // Fetch posts from local storage
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-[#4b61b8]">Blog Posts</h1>
      
      {posts.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <Link to="/create">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300">
              Start Blogging
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link to={`/post/${index}`} key={index} className="hover:scale-105 transition-transform duration-300">
              <div className="p-6 rounded-lg shadow-md bg-[#9CA9DA] text-gray-100 hover:shadow-lg transition-all duration-300 border border-gray-300">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm mb-2">By {post.author}</p>
                <p className="line-clamp-3">{post.content.substring(0, 100)}...</p>
                
                {/* Flex container to align buttons to the right */}
                <div className="flex justify-end space-x-2 mt-4">
                  <Link to={`/edit/${index}`}>
                    <button className="bg-sky-400 text-white py-1 px-3 rounded flex items-center space-x-2">
                      <FaEdit className="w-4 h-4" /> {/* Icon */}
                      <span>Edit</span> {/* Text */}
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded flex items-center space-x-2"
                    onClick={() => {
                      const confirmDelete = window.confirm('Are you sure you want to delete this post?');
                      if (confirmDelete) {
                        // Delete post logic
                        const updatedPosts = posts.filter((_, idx) => idx !== index);
                        localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
                        window.location.reload(); // Refresh to update the list
                      }
                    }}
                  >
                    <FaTrash className="w-4 h-4" /> {/* Icon */}
                    <span>Delete</span> {/* Text */}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
