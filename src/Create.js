import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import React from 'react';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // Redirect to the home page after successful blog creation
      navigate('/'); // Use navigate('/') to navigate
    }).catch(error => {
      console.error('Error creating blog:', error);
    });
  }

  return (
    <div className="col-md-6 offset-3">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          className="form-control"
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          className="form-control"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button type="submit" className="btn btn-outline-primary mt-3">Add Blog</button>
      </form>
    </div>
  );
}

export default Create;
