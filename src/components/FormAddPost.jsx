import React, { useContext, useState } from "react";
import { PostContext } from "../App";
import { usePostContextHook } from "../context/PostContext";

const FormAddPost = () => {
  // 3) consume context value
  const { onAddPost } = usePostContextHook();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post body"
        />
        <button>Add post</button>
      </form>
    </>
  );
};

export default FormAddPost;
