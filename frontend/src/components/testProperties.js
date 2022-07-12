import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = "http://localhost:8081";

export default function TestProperties() {
  const [post, setPost] = useState(null);

  useEffect(async () => {
    await axios.post(`${baseURL}/api/read-property`).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  async function updatePost() {
    await axios.put(`${baseURL}/api/put-property`, {
      name: "Hello World!",
      address: "This is an updated post."
    })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>

      <h1>{post.data[0].address}</h1>

      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}