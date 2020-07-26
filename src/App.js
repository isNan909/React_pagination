import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import DataSource from './api/DataSource';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const res = await DataSource.get('/posts');
      setPosts(res.data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = posts.slice(firstPost, lastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <div>
        <h2>My Paginated Post List</h2>
        <Posts posts={currentPosts} loading={isLoading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default App;
