"use client"
import React, { useState } from 'react';

export default function CreateFileForm() {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
      const data = await res.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Content:
        <input id='content' name='content' className='bg-rose-800' value={content} onChange={handleChange} />
      </label>
      <button type="submit">Create File</button>
    </form>
  );
}
