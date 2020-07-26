import React, { useState, useEffect } from 'react';
import './App.css';
import DataSource from "./api/DataSource";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const results = await DataSource.get('/posts');
      setPosts(results);
      setLoading(false);
    };

    getPosts();
  }, []);

  console.log(posts.data);

  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;
