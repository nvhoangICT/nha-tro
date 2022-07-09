import axios from "axios";
import React,{useState,useEffect} from "react";

const baseURL = "http://localhost:8081";

export default function TestProperties() {
  const [post, setPost] = useState(null);

   useEffect(async() => {
    await axios.get(`${baseURL}/api/get-property/e3b32f62-67e0-4bad-a60b-cf5453e40ca6`).then((response) => {
      setPost(response.data);
      console.log(response.data)
      console.log(post[0])
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
      
      <h1>{post.data.name}</h1>
   
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}