import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaPlus } from 'react-icons/fa'; // Import FontAwesome icons
import BlogList from './components/BlogList';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostDetail from './components/PostDetail'; // Import PostDetail component
import MessageBar from './components/MessageBar'; // Import MessageBar

function App() {
  return (
    <Router>
      <div className="bg-[#C1C9E9] min-h-screen"> {/* Changed background color */}
        {/* Navigation bar */}
        <nav className="p-4 bg-[#C1C9E9] text-2xl font-bold text-[#4b61b8] flex justify-between items-center">
          {/* Home button on the left */}
          <Link 
            to="/" 
            className="bg-white text-[#4b61b8] px-5 py-2 rounded hover:bg-gray-200 transition-all duration-300 flex items-center space-x-1"
          >
            <FaHome className="w-4 h-4" /> {/* Home Icon with smaller size */}
            <span className="text-base">Home</span> {/* Smaller text */}
          </Link>
          
          {/* New Post button on the right */}
          <Link 
            to="/create" 
            className="bg-white text-[#4b61b8] px-5 py-2 rounded hover:bg-gray-200 transition-all duration-300 flex items-center space-x-1"
          >
            <FaPlus className="w-4 h-4" /> {/* Plus Icon with smaller size */}
            <span className="text-base">New Post</span> {/* Smaller text */}
          </Link>
        </nav>

        {/* Message bar below the navigation bar */}
        <MessageBar />

        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostDetail />} /> {/* Add this line for PostDetail */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
