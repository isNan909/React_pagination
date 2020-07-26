import React from 'react';

const Posts = ({ posts, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
 
  return (
    <ul className='post-list'>
      {posts.map(post => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;