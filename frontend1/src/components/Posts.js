// import React, { useEffect, useState } from 'react';

// const Posts = ({ token }) => {
//   const [posts, setPosts] = useState([]);
//   const [form, setForm] = useState({ title: '', content: '' });

//   const fetchPosts = async () => {
//     const res = await fetch('http://localhost:5000/api/posts');
//     const data = await res.json();
//     setPosts(data);
//   };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     await fetch('http://localhost:5000/api/posts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify(form)
//     });
//     setForm({ title: '', content: '' });
//     fetchPosts();
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h2>Create Post</h2>
//       <form onSubmit={handleCreate}>
//         <input placeholder="Title" required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /><br />
//         <textarea placeholder="Content" required value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}></textarea><br />
//         <button type="submit">Post</button>
//       </form>

//       <h2>All Posts</h2>
//       <ul>
//         {posts.map(post => (
//           <li key={post._id}>
//             <strong>{post.title}</strong> - {post.content} <br />
//             <i>by {post.createdBy?.name || 'Unknown'}</i>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Posts;


import React, { useEffect, useState } from 'react';
import './Posts.css'; // Add this line if you're placing styles in Posts.css

const Posts = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });

  const fetchPosts = async () => {
    const res = await fetch('http://localhost:5000/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });
    setForm({ title: '', content: '' });
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      <div className="create-post-box">
        <h2 className="section-title">Create Post</h2>
        <form onSubmit={handleCreate} className="create-post-form">
          <input
            className="form-input"
            placeholder="Title"
            required
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            className="form-textarea"
            placeholder="Content"
            required
            value={form.content}
            onChange={e => setForm({ ...form, content: e.target.value })}
          ></textarea>
          <button className="form-button" type="submit">Post</button>
        </form>
      </div>

      <div className="posts-list-box">
        <h2 className="section-title">All Posts</h2>
        <ul className="posts-list">
          {posts.map(post => (
            <li className="post-item" key={post._id}>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
              <p className="post-author"><i>by {post.createdBy?.name || 'Unknown'}</i></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
